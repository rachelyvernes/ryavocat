import {defineField, defineType} from 'sanity'
import {MdArchive as icon} from 'react-icons/md'

export default defineType({
  name: 'competences',
  title: 'Competences',
  type: 'document',
  icon,
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
    }),
  ],
})
