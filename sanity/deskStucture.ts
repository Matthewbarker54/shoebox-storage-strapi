import { definePlugin } from 'sanity'
import { type StructureResolver } from 'sanity/structure'
import { 
  CogIcon, 
  InsertAboveIcon, 
  MasterDetailIcon, 
  HomeIcon, 
} from "@sanity/icons";

export const settingsPlugin = definePlugin<{ type: string }>(({ type }) => {
  return {
    name: 'settings',
    document: {
      // Hide 'Settings' from new document options
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => templateItem.templateId !== type)
        }

        return prev
      },
      // Removes the "duplicate" action on the "settings" singleton
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== 'duplicate')
        }

        return prev
      },
    },
  }
})

export const homepagePlugin = definePlugin<{ type: string }>(({ type }) => {
  return {
    name: 'homePage',
    document: {
      // Hide 'homePage' from new document options
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => templateItem.templateId !== type)
        }

        return prev
      },
      // Removes the "duplicate" action on the "homePage" singleton
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== 'duplicate')
        }

        return prev
      },
    },
  }
})

// The StructureResolver is how we're changing the DeskTool
// structure to linking to a single "Settings" document
export const settingsStructure = (): StructureResolver => {
  return (S) => {
    // The `Settings` root list item
    const settingsListItem = // A singleton not using `documentListItem`, eg no built-in preview
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(
          S.list()
          // Sets a title for our new list
          .title('Settings Document')
          // Add items to the array
          // Each will pull one of our new singletons
          .items([
            S.listItem()
              .title('Metadata')
              .icon(CogIcon)
              .child(S.document().schemaType('metaData').documentId('metaData').title('Metadata')),
            S.listItem()
              .title('Navigation')
              .icon(MasterDetailIcon)
              .child(S.document().schemaType('nav').documentId('nav').title('Navigation')),
            S.listItem()
              .title('Footer')
              .icon(InsertAboveIcon)
              .child(S.document().schemaType('footer').documentId('footer').title('Footer')),
          ])
        )

    const homepageListItem = // A singleton not using `documentListItem`, eg no built-in preview
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(
          S.document().schemaType('homepage').documentId('homepage').title('Home')
        )
         // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      // @ts-ignore
      (listItem) => !['metaData', 'homepage', 'nav', 'footer'].includes(listItem.getId())
    )

    return S.list()
      .id('Base')
      .title('Menu')
      .items([settingsListItem, homepageListItem, S.divider(), ...defaultListItems])
  }
}