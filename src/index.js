import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from './components/App';
import CategoriesView from './components/CategoriesView';
import SubCategoriesView from './components/SubCategoriesView';
import HistoryView from './components/HistoryView';
import Post from './components/Post/Post';

import GlobalStyle from './common/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Navigate to="/v/0" replace={true} />} />

          <Route path="p/:postId" element={<Post />} />

          <Route path="v/:categoryId" element={<CategoriesView />} >
            <Route index element={<SubCategoriesView />} />
            <Route path=":subCategoryId" element={<SubCategoriesView />} />
          </Route>

          <Route path="h" element={<HistoryView />} />

          <Route path="*" element={<p>404</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
