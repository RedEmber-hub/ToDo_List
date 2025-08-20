import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDOListPage } from './pages/ToDoListPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // строгий режим
  <React.StrictMode>
    <ToDOListPage />
  </React.StrictMode>
);