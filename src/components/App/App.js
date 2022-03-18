import React, { useState, useEffect } from "react";

import CategoryTab from "../CategoryTab";
import SubCategoryTab from "../SubCategoryTab";
import PostList from "../PostList";
import MainTab from "../MainTab";

import { getCategories } from "../../services";
import useAsync from "../../hooks/useAsync";

import * as S from "./style";
import logo from "../../static/logo-withtext.svg";

function App() {
  const [categories, setCategories] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState(undefined);
  const [currentSubCategoryId, setCurrentSubCategoryId] = useState(undefined);
  const [tabChoice, setTabChoice] = useState("hot"); // "hot" | "new" | "history"

  const { status, value, error } = useAsync(getCategories, true);
  useEffect(() => {
    if (value) {
      const categories = value.data.categories;
      setCategories(categories);
      setCurrentCategoryId(categories[0].category_id);
    }
  }, [value]);

  if (status !== "success") {
    return (
      <S.Container>
        <S.Header>
          <img src={logo} alt="logo" />
        </S.Header>
        {(status === "idle" || status === "pending") && <p>Loading</p>}
        {status === "error" && <p>Somthing is wrong: {error}</p>}
      </S.Container>
    );
  }

  const handleSwitchCategory = (id) => {
    setCurrentCategoryId(id);
    setCurrentSubCategoryId(undefined);
  };

  const handleSwitchSubCategory = (id) => {
    setCurrentSubCategoryId(id);
  };

  const handleSwitchTabChoice = (newChoice) => {
    if (tabChoice !== newChoice) {
      setTabChoice(newChoice);
    }
  };

  const currentCategory = categories.find(
    (c) => c.category_id === currentCategoryId
  );
  const subCategories = currentCategory.children;

  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt="logo" />
      </S.Header>

      <CategoryTab
        categories={categories}
        currentCategoryId={currentCategoryId}
        handleSwitchCategory={handleSwitchCategory}
      />

      <SubCategoryTab
        subCategories={subCategories}
        currentSubCategoryId={currentSubCategoryId}
        handleSwitchSubCategory={handleSwitchSubCategory}
      />

      <PostList
        tabChoice={tabChoice}
      />

      <MainTab
        tabChoice={tabChoice}
        handleSwitchTabChoice={handleSwitchTabChoice}
      />
    </S.Container>
  );
}

export default App;
