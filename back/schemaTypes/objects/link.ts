import {defineField, defineType} from 'sanity'
import {MdImage as icon} from 'react-icons/md'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Nom',
      type: 'string',
    }),
    defineField({
      name: 'lien',
      title: 'Lien',
      type: 'string',
    }),
    defineField({
      name: 'is_intern',
      title: 'Lien interne',
      type: 'boolean',
      initialValue: true,
      description: 'Cocher si le lien est vers le site',
    }),
  ]
})
