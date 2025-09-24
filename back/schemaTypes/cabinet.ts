import {defineField, defineType} from 'sanity'
import {MdBusinessCenter as icon} from 'react-icons/md'

export default defineType({
  name: 'cabinet',
  title: 'Cabinet',
  type: 'document',
  icon,
  fields: [
    defineField({
      title: 'Phrase d\'accroche',
      name: 'catchphrase',
      type: 'string'
    }),
    defineField({
      name: 'text',
      title: 'Texte',
      type: 'blockContent',
    }),
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'link',
    }),
  ],
})
