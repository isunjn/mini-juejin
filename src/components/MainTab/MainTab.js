import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./style";

function MainTab() {
  return (
    <S.Container>
      <NavLink to="/">文章</NavLink>
      <NavLink to="/h">历史</NavLink>
    </S.Container>
  );
}

export default MainTab;
