import React from "react";
import { Outlet } from "react-router-dom";

import * as S from "./style";
import logo from "../../static/logo-withtext.svg";

function Nav() {
  return (
    <>
      <S.Header>
        <img src={logo} alt="logo" />
      </S.Header>

      <Outlet />
    </>
  )
}

export default Nav;
