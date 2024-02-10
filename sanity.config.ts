import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity-tutorial-blog',

  projectId: 'sgx0hyut',
  dataset: 'production',
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
