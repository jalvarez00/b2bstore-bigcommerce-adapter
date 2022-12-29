import { ApolloClient, NormalizedCacheObject, useQuery } from "@apollo/client"

import { GET_PRODUCTS } from "./getProducts.gql"

const GetProducts = (client: ApolloClient<NormalizedCacheObject>) => {
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    client,
    pollInterval: 0,
  })

  if (loading) return { loading }
  if (error) return { error }
  return { data }
}

export default GetProducts
