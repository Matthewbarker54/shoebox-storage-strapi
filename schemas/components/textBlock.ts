import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export const textBlockType = defineType({
  name: 'textBlock',
  type: 'object',
  title: 'Text Block',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      title: 'Center text',
      name: 'center',
      type: 'boolean'
    }),
    defineField({
      name: 'button',
      type: 'object',
      title: 'Button',
      fields: [
        defineField({
          name: 'text',
          type: 'string',
          title: 'Button text',
        }),
        defineField({
          name: 'url',
          type: 'string',
          title: 'Button url',
        }),
      ],
    }),
  ],
  icon: BlockContentIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Text block',
        media: image || BlockContentIcon,
      }
    },
  },
})