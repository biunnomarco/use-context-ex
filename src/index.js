import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookState from './Context/BookContext';
import { value } from './Context/BookContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookState.Provider value={value}>
      <App />
    </BookState.Provider>
  </React.StrictMode>
);


