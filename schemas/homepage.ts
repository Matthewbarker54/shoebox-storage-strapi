import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Home page',
  type: 'document',
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
        validation: (rule) => rule.max(155).required(),
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
