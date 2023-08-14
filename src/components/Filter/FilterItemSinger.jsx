import React from "react";
import { items } from "../Play/Playlist";
import * as S from "./style.Filter";

function FilterItemSinger({
  SingerDisplayed,
  setSingerDisplayed,
  setYearDisplayed,
  setCategoryDisplayed,
}) {
  return (
    <S.FilterItem>
      <S.FilterButton
        onClick={() => {
          setSingerDisplayed(!SingerDisplayed);
          setYearDisplayed(false);
          setCategoryDisplayed(false);
        }}
        active={SingerDisplayed}
        
      >
        исполнителю
      </S.FilterButton>
      {SingerDisplayed && (
        <S.FilterContainer>
          {items.map(({ id, author }) => (
            <S.FilterOps>
              <S.FilterOpsRadio type="radio" id={id} name="category" />
              <label htmlFor={id}>{author}</label>
            </S.FilterOps>
          ))}
        </S.FilterContainer>
      )}
    </S.FilterItem>
  
  );
}

export default FilterItemSinger;



