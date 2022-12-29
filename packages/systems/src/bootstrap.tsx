import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);