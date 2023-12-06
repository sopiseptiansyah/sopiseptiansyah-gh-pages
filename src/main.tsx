import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './themes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={routes} />
   </ChakraProvider>
  </React.StrictMode>,
)
