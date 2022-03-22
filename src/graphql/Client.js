import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client"

const httpLink = new HttpLink({
  uri: 'https://graphql-pokemon2.vercel.app/'
});

export const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink])
});