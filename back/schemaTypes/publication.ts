import {defineField, defineType} from 'sanity'
import {MdBook  as icon} from 'react-icons/md'

export default defineType({
  name: 'publication',
  title: 'Publications',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'contenu',
      title: 'Contenu',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
