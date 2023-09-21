
import PlayItem from "./PlayItem";
import * as S from "./style.Play";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {setCurrentAlbumPlayer,setFilteredAlbum } from "../../functionsReducer/createSlice/currentAlbum";

export const items = [
  {
    title: "Chase",
    author:"Alexander Nakarada",
    album: "Chase",
    duration_in_seconds: "205",
    year: "2005-06-11",
    genre: "Классическая музыка",
    id: 1,
  },
  {
    title: "Trumpets in Your Ears",
    author: "Fanz",
    album: "Trumpets in Your Ears",
    duration_in_seconds: "165",
    year: "2013-05-10",
    genre:"Электронная музыка",
    id: 2,
  },
  {
    title: "Feel Good Rock",
    author:  "Audionautix",
    album: "FAST",
    duration_in_seconds: "312",
    year: "2020-02-12",
    genre: "Рок музыка",
    id: 3,
  },
  {
    title: "Non Stop",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    duration_in_seconds: "4:12",
    year: "2019-01-21",
    genre: "Поп музыка",
    id: 4,
  },
  {
    title: "Run Run",
    author: "Jaded, Will Clarke, AR/CO",
    album: "Run Run",
    duration_in_seconds: "2:54",
    year: "2021-06-11",
    genre: "Поп музыка",
    id: 5,
  },
  {
    title: "Eyes on Fire",
    author: "Blue Foundation, Zeds Dead",
    album: "Eyes on Fire",
    duration_in_seconds: "5:20",
    year: "2009-08-11",
    genre: "Классическая музыка",
    id: 6,
  },
  {
    title: "Mucho Bien",
    author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
    album: "Mucho Bien",
    duration_in_seconds: "3:41",
    year: "2020-08-12",
    genre: "Поп музыка",
    id: 7,
  },
  {
    title: "Knives n Cherries",
    author: "minthaze",
    album: "Captivating",
    duration_in_seconds: "1:48",
    year: "2018-05-09",
    genre: "Классическая музыка",
    id: 8,
  },
];

function Playlist({ loaded, setdisplayed, error, loading, findWord }) {
  const tracks = useSelector((state) => state.currentAlbum.value.tracks);
  const unfilteredTracks = useSelector(
    (state) => state.currentAlbum.value.unfilteredTracks
  );
  const dispatch = useDispatch();
  const filteredAuthors = useSelector(
    (state) => state.filterAuthor.value.authors
  );
  const filteredCategory = useSelector((state) => state.filterCategory.value.genres);
  const sortManner = useSelector((state) => state.sortTracks.value.sortManner);
  const compareNumericUp = (a, b) => {
   
    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) >
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return 1;
    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) ===
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return 0;
    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) <
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return -1;
  };

  const compareNumericDown = (a, b) => {

    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) >
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return -1;
    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) ===
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return 0;
    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) <
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return 1;
  };

  const sortFunc = () => {
    if (Number(sortManner) === 2) {
      return compareNumericDown;
    } else if (Number(sortManner) === 3) {
      return compareNumericUp;
    }
  };

  useEffect(() => {
    let filteredTracks = unfilteredTracks;
    if (unfilteredTracks) {
      if (Boolean(sortManner)) {
        filteredTracks = [...unfilteredTracks]
          .sort(sortFunc())
          .filter((val) => {
            if (findWord === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(findWord.toLowerCase())
            ) {
              return val;
            }
          })
          .filter((val) => {
            if (filteredAuthors.length <= 0) {
              return val;
            } else if (filteredAuthors.includes(val.author)) {
              return val;
            }
          })
          .filter((val) => {
            if (filteredCategory.length <= 0) {
              return val;
            } else if (filteredCategory.includes(val.genre)) {
              return val;
            }
          });
      } else {
     
        filteredTracks = unfilteredTracks
          .filter((val) => {
            if (findWord === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(findWord.toLowerCase())
            ) {
              return val;
            }
          })
          .filter((val) => {
            if (filteredAuthors.length <= 0) {
              return val;
            } else if (filteredAuthors.includes(val.author)) {
              return val;
            }
          })
          .filter((val) => {
            if (filteredCategory.length <= 0) {
              return val;
            } else if (filteredCategory.includes(val.genre)) {
              return val;
            }
          });
      }
  
      dispatch(setFilteredAlbum(filteredTracks));
      dispatch(setCurrentAlbumPlayer(filteredTracks));
    }
  }, [sortManner, findWord, filteredAuthors, filteredCategory]);

  return (
    <>
      {error && (
        <p style={{ color: "#d9b6ff" }}>
          Не удалось загрузить плейлист, попробуйте позже
        </p>
      )}
      {!error && (
        <S.ContentPlaylist>
          <div>
            {!loading
              ? tracks.map(
                  ({
                    id,
                    name,
                    author,
                    album,
                    duration_in_seconds,
                    track_file,
                    stared_user,
                  }) => (
                    <PlayItem
                      key={id}
                      id={id}
                      title={name}
                      author={author}
                      album={album}
                      duration_in_seconds={duration_in_seconds}
                      loaded={loaded}
                      setdisplayed={setdisplayed}
                      url={track_file}
                      likes={stared_user}
                    />
                  )
                )
              : items.map(({ id, title, author, album, duration_in_seconds }) => (
                  <PlayItem
                    key={id}
                    title={title}
                    author={author}
                    album={album}
                    duration_in_seconds={duration_in_seconds}
                    loaded={!loading}
                  />
                ))}{" "}
          </div>
        </S.ContentPlaylist>
      )}
    </>
  );
}

export default Playlist;