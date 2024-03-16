import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nav',
  title: 'Navigation',
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
  ]
})
