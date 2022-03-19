import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { getCategories } from "../../services";
import useAsync from "../../hooks/useAsync";

import * as S from "./style";
import logo from "../../static/logo-withtext.svg";

function App() {
  const [categories, setCategories] = useState([]);

  const { status, value, error } = useAsync(getCategories, true);
  useEffect(() => {
    if (value) {
      const categories = value.data.categories;
      setCategories(categories);
    }
  }, [value]);

  return (
    <S.Container>
      <S.Header>
        <img src={logo} alt="logo" />
      </S.Header>

      {(status === "idle" || status === "pending") && <p>Loading</p>}
      {status === "error" && <p>Somthing went wrong: {error}</p>}
      {status === "success" && <Outlet context={categories} />}

    </S.Container>
  );
}

export default App;
