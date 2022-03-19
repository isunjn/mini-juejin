import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import * as S from "./style";

function MainTab({ handleSwitchSortBy }) {
  // TODO: history tab
  
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get('sort') || 'hot';
  const tabChoice = sortBy;

  const handleSwitchTab = (newTab) => {
    handleSwitchSortBy(newTab);
  }

  return (
    <S.Container>
      <S.Button
        active={tabChoice === "hot"}
        onClick={() => handleSwitchTab("hot")}
      >
        热门
      </S.Button>
      <S.Button
        active={tabChoice === "new"}
        onClick={() => handleSwitchTab("new")}
      >
        最新
      </S.Button>
      <S.Button
        active={tabChoice === "history"}
        // onClick={}
      >
        历史
      </S.Button>
    </S.Container>
  );
}

export default MainTab;
