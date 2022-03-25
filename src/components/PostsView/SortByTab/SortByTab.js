import React from "react";

import * as S from "./style";

function SortByTab({ sortBy, handleSwitchSortBy }) {
  return (
    <S.Container>
      <S.Button
        active={sortBy === "hot"}
        onClick={() => handleSwitchSortBy("hot")}
      >
        热门
      </S.Button>
      <S.Button
        active={sortBy === "new"}
        onClick={() => handleSwitchSortBy("new")}
      >
        最新
      </S.Button>
    </S.Container>
  );
}

export default SortByTab;
