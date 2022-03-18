import React from "react";

import * as S from "./style";

function MainTab({
  tabChoice,
  handleSwitchTabChoice,
}) {
  return (
    <S.Container>
      <S.Button active={tabChoice === "hot"} onClick={() => handleSwitchTabChoice("hot")} >热门</S.Button>
      <S.Button active={tabChoice === "new"} onClick={() => handleSwitchTabChoice("new")} >最新</S.Button>
      <S.Button active={tabChoice === "history"} onClick={() => handleSwitchTabChoice("history")} >历史</S.Button>
    </S.Container>
  );
}

export default MainTab;
