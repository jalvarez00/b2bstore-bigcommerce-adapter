import { useEffect, useState } from 'react'

import { ProductsListing, parseProducts } from './productsParser'

const GetProducts = (fetch: any) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ProductsListing | null>(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const products = await fetch('/v3/catalog/products', {
          method: 'GET',
          headers: {
            'X-Auth-Token': 'b6pw5j3clfz10634tq8y8wnhsr9ksn9',
          },
        })

        const richProducts = await Promise.all(
          products?.data.map(async (product: any) => {
            const image = await fetch(`/v3/catalog/products/${product.id}/images`, {
              method: 'GET',
              headers: {
                'X-Auth-Token': 'b6pw5j3clfz10634tq8y8wnhsr9ksn9',
              },
            })
            return { ...product, image }
          }),
        )
        setData(parseProducts(richProducts))
      } catch (err: any) {
        setError(err)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return { data, loading, error }
}

export default GetProducts
