
import PlayItem from "./PlayItem";
import * as S from "./style.Play";
import React from "react";
import { useSelector } from "react-redux";

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
  {
    title: "How Deep Is Your Love",
    author: "Calvin Harris, Disciples",
    album: "How Deep Is Your Love",
    year: "2015-09-02",
    genre: "Электронная музыка",
    duration_in_seconds: "3:32",
    id: 9,
  },
  {
    title: "Morena",
    author: "Tom Boxer",
    album: "Soundz Made in Romania",
    duration_in_seconds: "3:36",
    year: "2015-01-13",
    genre: "Электронная музыка",
    id: 10,
  },
  {
    title: "",
    author: "",
    album: "",
    duration_in_seconds: "",
    id: 11,
  },
];

function Playlist({
  loaded,
  setdisplayed,
  error,
}) {
  const tracks = useSelector((state) => state.currentAlbum.value);
  return (
    <>
      {error && (
        <p style={{ color: "#d9b6ff" }}>
          Не удалось загрузить плейлист, попробуйте позже
        </p>
      )}
      {!error && (
        <S.ContentPlaylist>
          {tracks
        ? tracks.map(
          ({
            id,
            name,
            author,
            album,
            duration_in_seconds,
            track_file,
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
                  loaded={loaded}
                />
              ))}
        </S.ContentPlaylist>
      )}
    </>
  );
}

export default Playlist;
