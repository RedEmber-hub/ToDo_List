import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ToDOList } from './pages/ToDoList';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // строгий режим
  <React.StrictMode>
    <ToDOList />
  </React.StrictMode>
);