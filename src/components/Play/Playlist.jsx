//import React, { useEffect, useState } from "react";
import PlayItem from "./PlayItem";
import * as S from "./style.Play";

export const items = [
  {
    title: "Chase",
    author:"Alexander Nakarada",
    album: "Chase",
    time: "205",
    year: "2005-06-11",
    genre: "Классическая музыка",
    id: 1,
  },
  {
    title: "Trumpets in Your Ears",
    author: "Fanz",
    album: "Trumpets in Your Ears",
    time: "165",
    year: "2013-05-10",
    genre:"Электронная музыка",
    id: 2,
  },
  {
    title: "Feel Good Rock",
    author:  "Audionautix",
    album: "FAST",
    time: "312",
    year: "2020-02-12",
    genre: "Рок музыка",
    id: 3,
  },
  {
    title: "Non Stop",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12",
    year: "2019-01-21",
    genre: "Поп музыка",
    id: 4,
  },
  {
    title: "Run Run",
    author: "Jaded, Will Clarke, AR/CO",
    album: "Run Run",
    time: "2:54",
    year: "2021-06-11",
    genre: "Поп музыка",
    id: 5,
  },
  {
    title: "Eyes on Fire",
    author: "Blue Foundation, Zeds Dead",
    album: "Eyes on Fire",
    time: "5:20",
    year: "2009-08-11",
    genre: "Классическая музыка",
    id: 6,
  },
  {
    title: "Mucho Bien",
    author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
    album: "Mucho Bien",
    time: "3:41",
    year: "2020-08-12",
    genre: "Поп музыка",
    id: 7,
  },
  {
    title: "Knives n Cherries",
    author: "minthaze",
    album: "Captivating",
    time: "1:48",
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
    time: "3:32",
    id: 9,
  },
  {
    title: "Morena",
    author: "Tom Boxer",
    album: "Soundz Made in Romania",
    time: "3:36",
    year: "2015-01-13",
    genre: "Электронная музыка",
    id: 10,
  },
  {
    title: "",
    author: "",
    album: "",
    time: "",
    id: 11,
  },
];

function Playlist({
  loaded,
  tracks,
  setdisplayed,
  setCurrentTrack,
  error,
  setautoplay,
}) {
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
              time={duration_in_seconds}
              loaded={loaded}
              setdisplayed={setdisplayed}
              setCurrentTrack={setCurrentTrack}
              url={track_file}
              setautoplay={setautoplay}
            />
          )
        )
            : items.map(({ id, title, author, album, time }) => (
                <PlayItem
                  key={id}
                  title={title}
                  author={author}
                  album={album}
                  time={time}
                  loaded={loaded}
                />
              ))}
        </S.ContentPlaylist>
      )}
    </>
  );
}

export default Playlist;
