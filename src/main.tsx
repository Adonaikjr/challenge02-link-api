import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './screens/App'
import { defaultColors } from './theme/defaultColors'
import { Global } from './Global'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultColors}>
      <ToastContainer />
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
