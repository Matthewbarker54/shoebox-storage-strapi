import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nav',
  title: 'Nav',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'cta',
      title: 'Primary cta',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button text',
          type: 'string'
        },
        {
          name: 'url',
          title: 'Button URL',
          type: 'string'
        },
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Menu links',
      name: 'menuLink',
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
  ]
})
