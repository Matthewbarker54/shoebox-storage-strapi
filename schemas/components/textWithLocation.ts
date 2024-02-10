import {defineField, defineType} from 'sanity'
import {PinIcon} from '@sanity/icons'

export const textWithLocationType = defineType({
  name: 'textWithLocation',
  type: 'object',
  title: 'Text with Location',
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
      title: 'Place image on the left',
      name: 'reverse_row',
      type: 'boolean'
    }),
    defineField({
      name: 'location',
      type: 'object',
      fields: [
        defineField({
          name: 'mapCenterX',
          type: 'string',
          title: 'Map center X',
        }),
        defineField({
          name: 'mapCenterY',
          type: 'string',
          title: 'Map center Y',
        }),
        defineField({
          name: 'mapMarkerX',
          type: 'string',
          title: 'Map marker X',
        }),
        defineField({
          name: 'mapMarkerY',
          type: 'string',
          title: 'Map marker Y',
        }),
      ],
    }),
  ],
  icon: PinIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Text with Location',
        media: image || PinIcon,
      }
    },
  },
})