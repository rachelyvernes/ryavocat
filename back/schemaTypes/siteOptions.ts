import {defineField, defineType} from 'sanity'
import {MdBook  as icon} from 'react-icons/md'

export default defineType({
  name: 'siteOptions',
  title: 'Options',
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
      group: 'page',
    }),
    defineField({
      title: 'Adresse',
      name: 'adresse',
      type: 'string',
      group: 'page',
    }),
    defineField({
      title: 'Infos',
      name: 'infos',
      type: 'string',
      group: 'page',
    }),
    defineField({
      title: 'Mail',
      name: 'mail',
      type: 'string',
      group: 'page',
    }),
    defineField({
      title: 'Téléphone',
      name: 'tel',
      type: 'string',
      group: 'page',
    }),
    defineField({
      title: 'Linkedin',
      name: 'linkedin',
      type: 'string',
      group: 'page',
    }),
    defineField({
      title: 'Google',
      name: 'google',
      type: 'string',
      group: 'page',
    }),


    /* seo */
    defineField({
      type: 'string',
      name: 'title_default',
      title: 'Titre site par défaut',
      group: 'seo'
    }),
    defineField({
      type: 'text',
      title: 'Description site par défaut',
      name: 'description_default',
      group: 'seo'
    }),
    defineField({
      type: 'image',
      title: 'Image de partage site par défaut',
      name: 'ogImage_default',
      group: 'seo'
    })
  ],
  preview: {
    prepare({}) {
      return {
        title: 'Options',
      }
    },
  },
})