import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import './styles/fonts.css';
import { QueryClientProvider } from '@tanstack/react-query';
import App from './App.jsx';
import GlobalLoader from './components/GlobalLoader.jsx';
import Toaster from './components/Toaster.jsx';
import { queryClient } from './lib/query-client.js';
import { setErrorHandler } from './lib/api-client.js';
import { notifyError } from './hooks/use-notify.js';
import { setLanguage } from './i18n/translate.js';

setErrorHandler(notifyError);

let savedLang = 'ar';
try {
  savedLang = localStorage.getItem('ibram-lang') || 'ar';
} catch (e) {}

/* The design is drawn at 1920px: on laptop screens (e.g. Windows at 125% scale) scale the whole page
   proportionally so it looks exactly like the design. Phones/tablets (<=1024px) keep the responsive layout. */
function fitToDesign() {
  const w = window.innerWidth;
  const z = w > 1024 ? Math.min(Math.max(w / 1920, 0.6), 1.5) : 1;
  document.documentElement.style.zoom = z === 1 ? '' : String(z);
  document.documentElement.style.setProperty('--z', String(z));
}
fitToDesign();
window.addEventListener('resize', fitToDesign);

setLanguage(savedLang); // قبل الرسم: يطبّق ملف التنسيق واتجاه الصفحة

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalLoader />
    <Toaster />
  </QueryClientProvider>
);
