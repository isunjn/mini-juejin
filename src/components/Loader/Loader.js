import React from "react";

import * as S from "./style";

function Loader({ center }) {
  return (
    <S.Container center={center?true:false}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </S.Container>
  );
}

export default Loader;
