import {defineField, defineType} from 'sanity'
import {MdAttachMoney as icon} from 'react-icons/md'

export default defineType({
  name: 'honoraires',
  title: 'Honoraires',
  type: 'document',
  icon,
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
    }),
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'link',
    }),
    defineField({
      title: 'Informations supplémentaires',
      name: 'info',
      type: 'string'
    }),
  ],
})
