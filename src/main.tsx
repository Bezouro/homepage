import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {ChakraProvider, ToastProviderProps} from '@chakra-ui/react';
import {RouterProvider} from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import routes from "./router.tsx";
import {client} from "./services/graphql.ts";

const toastOptions: ToastProviderProps = {
  defaultOptions: {
    position: 'bottom-right',
    variant: 'left-accent',
    duration: 8000,
    isClosable: false,
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider toastOptions={toastOptions}>
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial} >
          <RouterProvider router={routes} />
        </DevSupport>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
