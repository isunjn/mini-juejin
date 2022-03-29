import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Nav from "../Nav";
import MainTab from "../MainTab";
import CategoryTab from "../CategoryTab";
import SubCategoryTab from "../SubCategoryTab";
import PostsView from "../PostsView";
import History from "../History";
import Post from "../Post";
import NotFound from "../NotFound";
import Loader from "../Loader";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import { getCategories } from "../../services/fake-api";

import * as S from "./style";

function App() {
  const [categories, setCategories] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      setIsFetching(true);
      const resp = await getCategories();
      setCategories(resp.data.categories);
      setIsFetching(false);
    }
    fetchCategories();
  }, []);

  return (
    <>
      {isFetching && <Loader center />}
      {categories && (
        <CategoriesContext.Provider value={categories}>
          <S.Nav>
            <Routes>
              <Route path="/" element={<Nav />}>
                <Route index element={<CategoryTab />} />
                <Route path=":categoryName" element={<CategoryTab />}>
                  <Route index element={<SubCategoryTab />} />
                  <Route path=":subCategoryName" element={<SubCategoryTab />} />
                </Route>
                <Route path="history" element={null} />
                <Route path="post/:postId" element={null} />
                <Route path="*" element={null} />
              </Route>
            </Routes>
          </S.Nav>

          <S.MainContent>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<PostsView />} />
                <Route path=":categoryName" element={<Outlet />}>
                  <Route index element={<PostsView />} />
                  <Route path=":subCategoryName" element={<PostsView />} />
                </Route>
                <Route path="history" element={<History />} />
                <Route path="post/:postId" element={<Post />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </S.MainContent>

          <MainTab />
        </CategoriesContext.Provider>
      )}
    </>
  );
}

export default App;
