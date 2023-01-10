import { gql } from "@apollo/client"

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(search: "QUATRO") {
      items {
        uid
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
