import React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

function NotFound() {
  return (
    <S.Container>
      <div>404 Not Found</div>
      <Link to="/">返回首页</Link>
    </S.Container>
  );
}

export default NotFound;