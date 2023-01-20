export interface Product {
  id: number
  uid: string
  name: string
  sku: string
  price_range: {
    minimum_price: {
      final_price: {
        currency: string
        value: number
      }
    }
  }
  small_image: {
    url: string
  }
}

export interface ProductsListing {
  products: {
    items: Product[]
  }
}

export const parseProducts = (rawProducts: any): ProductsListing => {
  return {
    products: {
      items: rawProducts.map((product: any): Product => {
        return {
          id: product.id,
          uid: product.sku,
          name: product.name,
          sku: product.sku,
          price_range: {
            minimum_price: {
              final_price: {
                currency: 'USD',
                value: product.price,
              },
            },
          },
          small_image: {
            url: product.image?.data[0]?.url_thumbnail,
          },
        }
      }),
    },
  }
}
