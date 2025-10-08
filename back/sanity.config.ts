import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
// import {tags} from 'sanity-plugin-tags-v4'

export default defineConfig({
  name: 'default',
  title: 'back-rachel',

  projectId: '5u5dp5q6',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Pages')
          .items([
            S.listItem()
              .id('home')
              .schemaType('home')
              .title('Page d\'accueil')
              .child(
                S.document()
                  .id('home')
                  .schemaType('home')
                  .documentId('3986cc51-54ed-4713-a58d-de7b4b8de349')),
            S.listItem()
              .id('cabinet')
              .schemaType('cabinet')
              .title('Cabinet')
              .child(
                S.document()
                  .id('cabinet')
                  .schemaType('cabinet')
                  .documentId('edabe195-5449-4eb5-951a-7a4fbf5d15be')),
            S.listItem()
              .id('competences')
              .schemaType('competences')
              .title('Compétences')
              .child(
                S.document()
                  .id('competences')
                  .schemaType('competences')
                  .documentId('4e0c0897-a5ee-44eb-986e-bbc91f406576')),
            S.listItem()
              .id('honoraires')
              .schemaType('honoraires')
              .title('Honoraires')
              .child(
                S.document()
                  .id('honoraires')
                  .schemaType('honoraires')
                  .documentId('da66ad19-3c59-455e-b3e8-633b1cafbec8')),
            S.listItem()
              .id('contact')
              .schemaType('contact')
              .title('Contact')
              .child(
                S.document()
                  .id('contact')
                  .schemaType('contact')
                  .documentId('48cc3cd7-439b-4106-82a3-6102b5407eb5')),
             S.documentTypeListItem('publication').title(
                'Publications',
              ),
            S.divider(),
            S.listItem()
              .id('siteOptions')
              .schemaType('siteOptions')
              .title('Options')
              .child(
                S.editor()
                  .id('siteOptions')
                  .schemaType('siteOptions')
                  .documentId('28c16f0c-9847-483f-adba-abcd3f772b41')),
          ]),
    }),
    visionTool(),
    // tags({}),
  ],

  schema: {
    types: schemaTypes,
  },
})
