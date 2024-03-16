// ./schemas/videoType.js
import {DocumentVideoIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'textWithVideo',
  type: 'object',
  title: 'Video',
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
      title: 'Place viedo on the left side',
      name: 'reverse_row',
      type: 'boolean'
    }),
    defineField({
      title: 'Video',
      name: 'video',
      type: 'file',
      options: {
        accept: ".mp4",
      },
      fields: [
        defineField({
          name: 'description',
          type: 'string',
          title: 'Description'
        }),
      ],
    }),
  ],
  icon: DocumentVideoIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Video',
        media: image || DocumentVideoIcon,
      }
    },
  },
})