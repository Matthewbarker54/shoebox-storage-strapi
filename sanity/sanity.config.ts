import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { settingsStructure, settingsPlugin } from './deskStucture'
import { settingsType } from '@/schemas/settings'
import { schemaTypes } from '@/schemas'

export default defineConfig({
    name: 'default',
    title: 'shoebox-storage',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID : '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ? process.env.NEXT_PUBLIC_SANITY_DATASET : '',
    basePath: "/studio",
    schema: {
        types: schemaTypes,
      },
    plugins: [
      // @ts-ignore
      structureTool({
        // @ts-ignore
        structure: settingsStructure(settingsType),
      }),
      settingsPlugin({
        type: settingsType.name,
      }),
      visionTool(),
    ]
})