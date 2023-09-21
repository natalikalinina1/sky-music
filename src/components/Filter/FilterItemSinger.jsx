import React from "react";
import * as S from "./style.Filter";
import { useDispatch, useSelector } from "react-redux";
import {addToAuthorsArray,deleteFromAuthorsArray} from "../../functionsReducer/createSlice/filterAuthor";

function FilterItemSinger({
  SingerDisplayed,
  setSingerDisplayed,
  setYearDisplayed,
  setCategoryDisplayed,
}) {
  const currentTracks = useSelector(
    (state) => state.currentAlbum.value.unfilteredTracks
  );
  const tracks = useSelector((state) => state.currentAlbum.value.tracks);
  const filteredAuthors = useSelector(
    (state) => state.filterAuthor.value.authors
  );
  const dispatch = useDispatch();
  let uniqueAuthoredTracks = [];
  if (currentTracks) {
    let authoredTracks;
    authoredTracks = currentTracks.filter((item) => item.author !== "-");
    let uniqueAuthors = [];
    for (let i = 0; i < authoredTracks.length; i++) {
      if (!uniqueAuthors.includes(authoredTracks[i].author)) {
        uniqueAuthors.push(authoredTracks[i].author);
        uniqueAuthoredTracks.push(authoredTracks[i]);
      } else {
        i++;
      }
    }
  }

  const filterByAuthor = (author) => {
   
    if (filteredAuthors.includes(author)) {
      dispatch(deleteFromAuthorsArray(author));
   
    } else {
      dispatch(addToAuthorsArray(author));
      
    }
  };
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
        {filteredAuthors.length > 0 ? (
          <S.SelectedCategory>{tracks.length}</S.SelectedCategory>
        ) : (
          ""
        )}
        исполнителю
      </S.FilterButton>
      {currentTracks ? (
        <>
      {SingerDisplayed && (
        <S.FilterContainer>
         {uniqueAuthoredTracks.map(({ id, author }) => (
            <S.FilterOps key={id} selected={filteredAuthors.includes(author)}>
              <S.FilterOpsRadio
                   type="radio"
                    id={id}
                    name="category"
                    onClick={() => filterByAuthor(author)} />
              <label htmlFor={id}>{author}</label>
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

export default FilterItemSinger;



