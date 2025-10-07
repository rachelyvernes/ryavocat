import {defineField, defineType} from 'sanity'
import {MdHome as icon} from 'react-icons/md'

export default defineType({
  name: 'home',
  title: 'Page d\'accueil',
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
      title: 'Phrase d\'accroche',
      name: 'catchphrase',
      type: 'string',
      group: 'page',
    }),
    defineField({
      name: 'link',
      title: 'Lien',
      type: 'link',
      group: 'page',
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'image',
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
