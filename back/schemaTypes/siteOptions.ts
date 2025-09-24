import {defineField, defineType} from 'sanity'
import {MdBook  as icon} from 'react-icons/md'

export default defineType({
  name: 'siteOptions',
  title: 'Options',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Adresse',
      name: 'adresse',
      type: 'string',
    }),
    defineField({
      title: 'Mail',
      name: 'mail',
      type: 'string',
    }),
    defineField({
      title: 'Linkedin',
      name: 'linkedin',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})