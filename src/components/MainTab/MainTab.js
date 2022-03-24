import React from "react";
import { Link, useMatch } from "react-router-dom";

import * as S from "./style";

function MainTab() {
  const matchHistory = useMatch({ path: "/history", end: true });

  return (
    <S.Container>
      <Link to="/" className={matchHistory ? "" : "active"}>
        文章
      </Link>
      <Link to="/history" className={matchHistory ? "active" : ""}>
        历史
      </Link>
    </S.Container>
  );
}

export default MainTab;
