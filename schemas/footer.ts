import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
    }),
    defineField({
      name: 'twitter', 
      title: 'X (Twitter)',
      type: 'string',
    }),
    defineField({
      name: 'menuLinksFirst',
      title: 'Menu links first column',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { 
              type: 'page'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'menuLinksSecond',
      title: 'Menu links second column',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { 
              type: 'page'
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'textFirst',
      title: 'Text first column',
      type: 'blockContent',
    }),
    defineField({
      name: 'textSecond',
      title: 'Text second column',
      type: 'blockContent',
    }),
    defineField({
      name: 'bottomText',
      title: 'Copyright line',
      type: 'text'
    }),
  ]
})
