import React from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";

import * as S from "./style";

function MainTab() {
  const navigate = useNavigate();

  const matchHistory = useMatch({ path: "/history", end: true });
  const matchPost = useMatch({ path: "/post", end: false});

  const handleClickHome = () => {
    if (matchPost || matchHistory) {
      navigate(-1);
    }
  }

  return (
    <S.Container>
      <button onClick={handleClickHome} className={matchHistory ? "" : "active"}>
        文章
      </button>
      <Link to="/history" className={matchHistory ? "active" : ""}>
        历史
      </Link>
    </S.Container>
  );
}

export default MainTab;
