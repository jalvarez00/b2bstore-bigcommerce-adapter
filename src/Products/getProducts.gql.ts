import { gql } from "@apollo/client"

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(search: "ATTIC") {
      items {
        id
        name
        sku
        price_range {
          minimum_price {
            final_price {
              currency
              value
            }
          }
        }
        small_image {
          url
        }
      }
    }
  }
`
