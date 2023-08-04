import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

import './assets/scss/main.scss';

createRoot(document.querySelector('#app')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
