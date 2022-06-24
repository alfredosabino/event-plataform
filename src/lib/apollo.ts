import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rplbvg1fn101z15j9oa06c/master',
    cache: new InMemoryCache()
})