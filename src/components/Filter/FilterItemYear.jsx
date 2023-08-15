import React from "react";
import { items } from "../Play/Playist";
import * as S from "./style.Filter";


function FilterItemYear({
  yearDisplayed,
  setYearDisplayed,
  setSingerDisplayed,
  setCategoryDisplayed,
}) {
  let itemsFiltered = [];
  for (let i = 0; i < items.length; i++) {
    if (!itemsFiltered.includes(items[i].year)) {
      itemsFiltered.push(items[i].year);
    } else {
      i++;
    }
  }

  return (
    <S.FilterItem>
      <S.FilterButton
        onClick={() => {
          setYearDisplayed(!yearDisplayed);
          setSingerDisplayed(false);
          setCategoryDisplayed(false);
        }}
        active={yearDisplayed}
 
      >
        году выпуска
      </S.FilterButton>
      {yearDisplayed && (
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

export default FilterItemYear;

