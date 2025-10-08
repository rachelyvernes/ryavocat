import {defineField, defineType} from 'sanity'
import {MdBook  as icon} from 'react-icons/md'

export default defineType({
  name: 'publication',
  title: 'Publications',
  type: 'document',
  icon,
  groups: [
    {
      name: 'page',
      title: 'Page',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: ['page', 'seo'],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
      group: 'page',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
          options: {
            disableNew: false, // autorise la création d’un nouveau tag à la volée
          },
        },
      ],
    }),
    defineField({
      name: 'contenu',
      title: 'Contenu',
      type: 'blockContent',
      group: 'page',
    }),
    defineField({
      name: 'cover',
      title: 'Image de couverture',
      type: 'image',
      group: 'page',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      group: 'page',
    }),

  
    defineField({
      type: 'text',
      title: 'Description de la page',
      name: 'description',
      group: 'seo'
    }),
    defineField({
      type: 'text',
      title: 'Description de la page og (LinkedIn, Twitter, Facebook, ...)',
      name: 'description_og',
      group: 'seo'
    }),
    defineField({
      type: 'image',
      title: 'Image de partage',
      name: 'ogImage',
      group: 'seo'
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
