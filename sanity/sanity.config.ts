import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { settingsStructure, settingsPlugin } from './deskStucture'
import { settingsType } from '@/schemas/settings'
import { schemaTypes } from '@/schemas'

export default defineConfig({
    name: 'default',
    title: 'shoebox-storage',

    projectId: 'sgx0hyut',
    dataset: 'production',
    basePath: "/studio",
    schema: {
        types: schemaTypes,
      },
    plugins: [
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