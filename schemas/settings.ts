import { defineField, defineType } from "sanity";

export const settingsType = defineType({
  name: "metaData",
  title: "Metadata",
  type: "document",
  preview: {
    prepare: () => ({ title: "Metadata" }),
  },
  fields: [
    defineField({
      name: "title",
      description: "Appears in the browser tab and search results.",
      title: "Title",
      type: "string",
      initialValue: "Site Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      description: "Appears in search results.",
      title: "Description",
      type: "string",
      initialValue: "Site Description",
      validation: (rule) => rule.max(155).required(),
    }),
  ],
});