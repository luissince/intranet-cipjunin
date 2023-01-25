import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './store/store';
import { Provider } from 'react-redux';

import './assets/css/bootstrap.css';
import './assets/css/sweetalert.css';
import './assets/css/fontawesome.css';
import './assets/css/treeone.css';
import './assets/css/sidebar.css';
import './assets/css/footerbar.css';

import './assets/js/bootstrap.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/react-notifications/lib/notifications.css';
import './assets/js/sweetalert.js';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
    </Provider>
  </React.StrictMode>

)
