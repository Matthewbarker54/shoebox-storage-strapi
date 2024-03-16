import {defineArrayMember, defineField, defineType} from 'sanity'
import {
  DocumentsIcon
} from "@sanity/icons";
import client from '../sanity/sanity.client'

async function asyncSlugifier(input: any) {
  const parentQuery = '*[_id == $id][0]'
  const parentQueryParams = {
    id: input.doc.parent?._ref || '',
  }

  const parent = await client.fetch(parentQuery, parentQueryParams)

  const parentSlug = parent?.slug?.current ? `${parent.slug.current}/` : ''

  const pageSlug = input.doc.title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .slice(0, 200)
  return `${parentSlug}${pageSlug}`
}

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Pages',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "title",
      description: "Appears in the browser tab and search results.",
      title: "Title",
      type: "string",
      initialValue: "Site Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      description: "Appears in search results.",
      title: "Description",
      type: "string",
      initialValue: "Site Description",
      validation: (rule) => rule.max(155),
    }),
    defineField({
      title: "Parent",
      name: 'parent',
      description: "If added, bases this page's slug on the selected parent when clicking 'generate' on slug field.",
      type: 'reference',
      weak: true,
      to: [
        {
          type: 'page'
        }
      ]
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      description: "Appears as the page url, can be generated from the title.",
      type: 'slug',
      options: {
        // @ts-ignore
        source: (doc, options) => ({ doc, options }),
        slugify: asyncSlugifier,
      }
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textWithIllustration',
          type: 'textWithIllustration',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'form',
          type: 'form',
        }),
        defineArrayMember({
          name: 'textWithVideo',
          type: 'textWithVideo',
        }),
        defineArrayMember({
          name: 'textBlock',
          type: 'textBlock',
        }),
        defineArrayMember({
          name: 'textWithLocation',
          type: 'textWithLocation',
        }),
        // etc...
      ],
    }),
  ],
})