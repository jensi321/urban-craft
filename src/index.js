import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'animate.css';
import { DataProvider } from './Components/Context/Dataprovider';
import { Provider } from 'react-redux';
import store from './Components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Provider store={store}> 
    <DataProvider>
      <App />
    </DataProvider>
    </Provider>

  </>
);

