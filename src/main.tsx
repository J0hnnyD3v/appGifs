import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppGifs } from './AppGifs.tsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppGifs />
  </React.StrictMode>,
);
