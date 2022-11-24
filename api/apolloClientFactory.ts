import { ApolloClient, InMemoryCache } from "@apollo/client";

export interface IApolloClientParams {
  apiUrl: string;
}

export const apolloClientFactory = ({ apiUrl }: IApolloClientParams) =>
  new ApolloClient({
    uri: apiUrl,
    cache: new InMemoryCache(),
  });
