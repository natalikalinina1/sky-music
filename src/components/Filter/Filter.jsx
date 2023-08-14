import React from "react";
import FilterItemSinger from "./FilterItemSinger";
import { useState } from "react";
import FilterItemYear from "./FilterItemYear";
import FilterItemCategory from "./FilterItemCategory";
import * as S from "./style.Filter";

function Filter() {
  const [SingerDisplayed, setFirstShown] = useState(false);
  const [yearDisplayed, setYearDisplayed] = useState(false);
  const [CategoryDisplayed, setCategoryDisplayed] = useState(false);

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterItemSinger
        SingerDisplayed={SingerDisplayed}
        setSingerDisplayed={setFirstShown}
        setYearDisplayed={setYearDisplayed}
        setCategoryDisplayed={setCategoryDisplayed}
      />
      <FilterItemYear
        yearDisplayed={yearDisplayed}
        setYearDisplayed={setYearDisplayed}
        setSingerDisplayed={setFirstShown}
        setCategoryDisplayed={setCategoryDisplayed}
      />
      <FilterItemCategory
        CategoryDisplayed={CategoryDisplayed}
        setCategoryDisplayed={setCategoryDisplayed}
        setYearDisplayed={setYearDisplayed}
        setSingerDisplayed={setFirstShown}
      />
    </S.CenterblockFilter>
  );
}

export default Filter;
