import {defineField, defineType} from 'sanity'
import {MdArchive as icon} from 'react-icons/md'

export default defineType({
  name: 'competences',
  title: 'Competences',
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
      title: 'Compétences',
      name: 'competences',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            { type: 'string', title: 'Compétence', name: 'title' },
            { type: 'array', name: 'liste', of:[{type: 'string'}] },
          ]
        }
      ],
      group: 'page',
    }),


    defineField({
      type: 'string',
      name: 'title',
      title: 'Titre de la page',
      group: 'seo',
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
    prepare({}) {
      return {
        title: 'Compétences',
      }
    },
  },
})
