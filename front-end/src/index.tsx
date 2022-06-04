import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './assts/css/global';
import { Provider } from 'react-redux'
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <GlobalStyle />
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
