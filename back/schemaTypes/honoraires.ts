import {defineField, defineType} from 'sanity'
import {MdAttachMoney as icon} from 'react-icons/md'

export default defineType({
  name: 'honoraires',
  title: 'Honoraires',
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
      title: 'Blocs',
      name: 'blocs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'inline',
          fields: [
            { type: 'string', title: 'Titre', name: 'title' },
            { name: 'contenu', title: 'Contenu', type: 'blockContent' },
          ]
        }
      ],
      group: 'page',
    }),
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'link',
      group: 'page',
    }),
    defineField({
      title: 'Informations supplémentaires',
      name: 'info',
      type: 'string',
      group: 'page',
    }),

    
    defineField({
      type: 'string',
      name: 'title',
      title: 'Titre de la page',
      group: 'seo'
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
        title: 'Honoraires',
      }
    },
  },
})
