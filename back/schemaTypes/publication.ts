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
    defineField({
      name: 'cover',
      title: 'Image de couverture',
      type: 'image',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
