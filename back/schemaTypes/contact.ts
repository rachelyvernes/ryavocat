import {defineField, defineType} from 'sanity'
import {MdContacts as icon} from 'react-icons/md'

export default defineType({
  name: 'contact',
  title: 'Contact',
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
      title: 'Texte formulaire',
      name: 'texte_formulaire',
      type: 'string',
      group: 'page',
    }),
    defineField({
      title: 'Motifs du contact',
      name: 'motifs',
      type: 'array',
      of: [{ type: 'string'}],
      group: 'page',
    }),
    defineField({
      title: 'Texte RDV',
      name: 'texte_rdv',
      type: 'string',
      group: 'page',
    }),
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
            { type: 'string', title: 'Tarif', name: 'tarif' },
            { type: 'url', title: 'Lien', name: 'lien' },
          ]
        }
      ],
      group: 'page',
    }),
    defineField({
      title: 'Texte RDV bas',
      name: 'texte_rdv_bis',
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
})
