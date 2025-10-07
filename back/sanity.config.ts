import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'back-rachel',

  projectId: '5u5dp5q6',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Document Types')
          .items([
            S.listItem()
              .title('Page d\'accueil')
              .child(
                S.document()
                  .schemaType('home')
                  .documentId('3986cc51-54ed-4713-a58d-de7b4b8de349')),
            S.listItem()
              .title('Cabinet')
              .child(
                S.document()
                  .schemaType('cabinet')
                  .documentId('edabe195-5449-4eb5-951a-7a4fbf5d15be')),
            S.listItem()
              .title('Compétences')
              .child(
                S.document()
                  .schemaType('competences')
                  .documentId('4e0c0897-a5ee-44eb-986e-bbc91f406576')),
            S.listItem()
              .title('Honoraires')
              .child(
                S.document()
                  .schemaType('honoraires')
                  .documentId('da66ad19-3c59-455e-b3e8-633b1cafbec8')),
            S.listItem()
              .title('Contact')
              .child(
                S.document()
                  .schemaType('contact')
                  .documentId('48cc3cd7-439b-4106-82a3-6102b5407eb5')),
            S.listItem()
              .title('Options')
              .child(
                S.document()
                  .schemaType('siteOptions')
                  .documentId('28c16f0c-9847-483f-adba-abcd3f772b41')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
