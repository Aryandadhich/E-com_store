import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/layout/App.tsx'
import './App/layout/style.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//strictmode is actuyally makes 2 request when we are going to get a resource
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
