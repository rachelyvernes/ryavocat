import {defineField, defineType} from 'sanity'
import {MdContacts as icon} from 'react-icons/md'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon,
  fields: [
    defineField({
      title: 'Texte formulaire',
      name: 'texte_formulaire',
      type: 'string'
    }),
    defineField({
      title: 'Motifs du contact',
      name: 'motifs',
      type: 'array',
      of: [{ type: 'string'}],
    }),
    defineField({
      title: 'Texte RDV',
      name: 'texte_rdv',
      type: 'string'
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
    }),
    defineField({
      title: 'Texte RDV bas',
      name: 'texte_rdv_bis',
      type: 'string'
    }),
  ],
})
