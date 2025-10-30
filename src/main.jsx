import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import AuthProvider from './Component/AuthProfider/AuthProvider.jsx'
import Routers from './Router/Routers.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Routers></Routers>
    </AuthProvider>
  </StrictMode>,
)
