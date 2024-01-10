import {ApolloClient, createHttpLink, DefaultOptions, InMemoryCache,} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const defaultPort = 3000;

function getApiUrl() {
  const protocol = window.location.protocol;
  const [host, port] = window.location.host.split(':');
  const portNumber = port && Number(port) > 0 ? `:${defaultPort}` : ``;
  return `${protocol}//${host}${portNumber}/api`;
}

const httpLink = createHttpLink({
  uri: getApiUrl(),
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Link: {
        keyFields: ['id'],
      },
    },
  }),
  defaultOptions,
});
