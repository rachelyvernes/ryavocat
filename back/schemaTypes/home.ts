import {defineField, defineType} from 'sanity'
import {MdHome as icon} from 'react-icons/md'

export default defineType({
  name: 'home',
  title: 'Page d\'accueil',
  type: 'document',
  icon,
  fields: [
    defineField({
      title: 'Phrase d\'accroche',
      name: 'catchphrase',
      type: 'string'
    }),
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'link',
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'image',
    }),
  ],
})
