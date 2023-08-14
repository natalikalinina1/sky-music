import React from "react";
import { items } from "../Play/Playist";
import * as S from "./style.Filter";


function FilterItemCategory({
  CategoryDisplayed,
  setCategoryDisplayed,
  setSingerDisplayed,
  setYearDisplayed,
}) {
  let itemsFiltered = [];
  for (let i = 0; i < items.length; i++) {
    if (!itemsFiltered.includes(items[i].genre)) {
      itemsFiltered.push(items[i].genre);
    } else {
      i++;
    }
  }

  return (
    <S.FilterItem>
      <S.FilterButton
        onClick={() => {
          setCategoryDisplayed(!CategoryDisplayed);
          setSingerDisplayed(false);
          setYearDisplayed(false);
        }}
        active={CategoryDisplayed}
   
      >
        жанру
      </S.FilterButton>
      {CategoryDisplayed && (
        <S.FilterContainer>
          {itemsFiltered.map((item, index) => (
            <S.FilterOps>
              <S.FilterOpsRadio type="radio" id={index} name="category" />
              <label htmlFor={index}>{item}</label>
            </S.FilterOps>
          ))}
        </S.FilterContainer>
      )}
    </S.FilterItem>
  );
}

export default FilterItemCategory;
