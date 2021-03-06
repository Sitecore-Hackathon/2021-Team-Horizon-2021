import { gql } from '@apollo/client';


/**
 * Gets all available products
 */
export const GET_PRODUCTS = gql`
  {
    search(fieldsEqual: [
  
      {name: "_templatename", value: "Product"}]) {
      results {
        products: items {
          title: field(name: "title")
          description: field(name: "description")
          sku: field(name: "sku")
          category: field(name: "category")
          imagePublicId: field(name: "imagePublicId")
          condition: field(name: "condition")
          tags: field(name: "tags")
          item{
            image: field(name: "image"){
              ...ImageQuery
            }
          }
        }
      }
    }
  }
  
  fragment ImageQuery on ImageField {
    alt
    src
  }
`;
