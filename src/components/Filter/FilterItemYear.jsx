import React from "react";
import * as S from "./style.Filter";
import { useSelector, useDispatch } from "react-redux";
import { setSortManner } from "../../functionsReducer/createSlice/sortTracks";

function FilterItemYear({
  yearDisplayed,
  setYearDisplayed,
  setSingerDisplayed,
  setCategoryDisplayed,
}) {
  const currentTracks = useSelector(
    (state) => state.currentAlbum.value.unfilteredTracks
  );
  const sortManner = useSelector((state) => state.sortTracks.value.sortManner);
  const dispatch = useDispatch();

  const setSorted = (id) => {
    dispatch(setSortManner(id));
  };
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
      {currentTracks ? (
        <>

      {yearDisplayed && (
        <S.FilterContainer>
            <S.FilterOps key={1} selected={sortManner === ""}>
              <S.FilterOpsRadio type="radio"
                  id={1}
                  name="category"
                  onClick={() => setSorted("")}
                />
              <label htmlFor={1}>По умолчанию</label>
            </S.FilterOps>
            <S.FilterOps key={2} selected={sortManner === 2}>
              <S.FilterOpsRadio type="radio"
                  id={2}
                  name="category"
                  onClick={() => setSorted(2)}
                />
              <label htmlFor={2}>Сначала Новые</label>
            </S.FilterOps>
            <S.FilterOps key={3} selected={sortManner === 3}>
              <S.FilterOpsRadio type="radio"
                  id={3}
                  name="category"
                  onClick={() => setSorted(3)}
                />
              <label htmlFor={3}>Сначала Старые</label>
            </S.FilterOps>
            </S.FilterContainer>
          )}
          </>
      
      ) : (
        ""
      )}
    </S.FilterItem>
  );
}

export default FilterItemYear;

