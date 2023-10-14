import React from "react";
import * as S from "./style.Filter";
import { useSelector, useDispatch } from "react-redux";
import {addToCategoryArray,deleteFromCategoryArray} from "../../functionsReducer/createSlice/filterCategory";

function FilterItemCategory({
  CategoryDisplayed,
  setCategoryDisplayed,
  setSingerDisplayed,
  setYearDisplayed,
}) {
  const currentTracks = useSelector(
    (state) => state.currentAlbum.value.unfilteredTracks
  );
  const tracks = useSelector((state) => state.currentAlbum.value.tracks);
  const filteredCategory = useSelector((state) => state.filterCategory.value.genres);
  const dispatch = useDispatch();
  let uniqueTracks = [];
  if (currentTracks) {
    let uniqueCategory = [];
    for (let i = 0; i < currentTracks.length; i++) {
      if (!uniqueCategory.includes(String(currentTracks[i].genre))) {
        uniqueCategory.push(String(currentTracks[i].genre));
        uniqueTracks.push(currentTracks[i]);
      } else {
        i++;
      }
    }
  }
  const filterByCategory = (genre) => {
   
    if (filteredCategory.includes(genre)) {
      dispatch(deleteFromCategoryArray(genre));
     
    } else {
      dispatch(addToCategoryArray(genre));
    
    }
  };
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
        {filteredCategory.length > 0 ? (
          <S.SelectedCategory>{tracks.length}</S.SelectedCategory>
        ) : (
          ""
        )}
        жанру
      </S.FilterButton>
      {currentTracks ? (
        <>
      {CategoryDisplayed && (
        <S.FilterContainer>
        {uniqueTracks.map(({ genre, id }) => (
            <S.FilterOps  key={id} selected={filteredCategory.includes(genre)}>
              <S.FilterOpsRadio   type="radio"
                    id={id}
                    name="category"
                    onClick={() => filterByCategory(genre)}
                  />
                  <label htmlFor={id}>{genre}</label>
            </S.FilterOps>
          ))}
        </S.FilterContainer>
      )}
      </>
     ) : (
      ""
    )}
  </S.FilterItem>
);
     }
export default FilterItemCategory;
