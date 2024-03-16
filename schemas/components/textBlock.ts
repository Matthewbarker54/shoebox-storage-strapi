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
      name: 'button',
      type: 'object',
      title: 'Button',
      fields: [
        defineField({
          name: 'text',
          type: 'string',
          title: 'Text',
        }),
        defineField({
          name: 'link',
          type: 'object',
          title: 'External link',
          fields: [
            {
              name: 'href',
              type: 'url',
              title: 'URL',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              })
            },
            {
              title: 'Open in new tab',
              name: 'blank',
              type: 'boolean'
            }
          ]
        }),
        defineField({
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'page' },
                  // other types you may want to link to
                ]
              }
            ]
        }),
      ],
    }),
    defineField({
      title: 'Center content',
      name: 'center',
      type: 'boolean'
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