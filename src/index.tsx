import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/global.jsx';

import './index.css';
import App from './App.jsx';

ReactDOM.render(
  <BrowserRouter>
    <GlobalProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
