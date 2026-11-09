import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import './styles/fonts.css'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import App, { fitToDesign } from './App.jsx'
import GlobalLoader from './components/GlobalLoader.jsx'
import Toaster from './components/Toaster.jsx'
import { queryClient } from './lib/query-client.js'
import { setErrorHandler } from './lib/api-client.js'
import { notifyError } from './hooks/use-notify.js'
import { setLanguage } from './i18n/translate.js'

setErrorHandler(notifyError)

let savedLang = 'ar'
try {
  savedLang = localStorage.getItem('ibram-lang') || 'ar'
} catch (e) {}

fitToDesign()
window.addEventListener('resize', fitToDesign)

setLanguage(savedLang)

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <GlobalLoader />
      <Toaster />
    </BrowserRouter>
  </QueryClientProvider>
)
