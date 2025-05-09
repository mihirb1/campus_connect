import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// for Google OATH
import {GoogleOAuthProvider} from '@react-oauth/google';

const CLIENT_ID = '412228531508-ldqibk1u4nr7jmqc4mnnfkmpp4arm72d.apps.googleusercontent.com'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId = {CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>  
  </StrictMode>
)
