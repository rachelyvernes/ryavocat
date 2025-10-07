import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const structure = (S, context) =>
S.list()
.title('Contenu')
.items([
  S.listItem()
        .title('Page d\'accueil')
        .child(
          S.document()
            .schemaType('home')
            .documentId('3986cc51-54ed-4713-a58d-de7b4b8de349'))
  // S.documentListItem().id('3986cc51-54ed-4713-a58d-de7b4b8de349').schemaType('home'),
  // S.documentListItem().id('edabe195-5449-4eb5-951a-7a4fbf5d15be').schemaType('cabinet'),
])
