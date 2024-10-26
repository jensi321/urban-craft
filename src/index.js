import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'animate.css';
import { DataProvider } from './Components/Context/Dataprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    <DataProvider>
      <App />
    </DataProvider>

  </>
);

