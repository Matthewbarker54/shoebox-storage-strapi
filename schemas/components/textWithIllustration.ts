import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const textWithIllustrationType = defineType({
  name: 'textWithIllustration',
  type: 'object',
  title: 'Text with Illustration',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      title: 'Place image on the left side',
      name: 'reverse_row',
      type: 'boolean'
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
  icon: ImageIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Text with Illustration',
        media: image || ImageIcon,
      }
    },
  },
})