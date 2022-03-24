import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from './common/GlobalStyle';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
