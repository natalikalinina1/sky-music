import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import currentTrackReducer from "./functionsReducer/createSlice/currentTrack";
import currentAlbumReducer from "./functionsReducer/createSlice/currentAlbum";
import playingStatusReducer from "./functionsReducer/createSlice/playingStatus";
import actionStatusReducer from "./functionsReducer/createSlice/actionStatus";
import likedStatusReducer from "./functionsReducer/createSlice/likedStatus";
import filterStatusReducer from "./functionsReducer/createSlice/filterStatus";
import filterAuthorReducer from "./functionsReducer/createSlice/filterAuthor";
import filterCategoryReducer from "./functionsReducer/createSlice/filterCategory";
import sortTracksReducer from "./functionsReducer/createSlice/sortTracks";

const store = configureStore({
  reducer: {
    currentTrack: currentTrackReducer,
    currentAlbum: currentAlbumReducer,
    playingStatus: playingStatusReducer,
    actionStatus: actionStatusReducer,
    likedStatus: likedStatusReducer,
    filterStatus: filterStatusReducer,
    filterAuthor: filterAuthorReducer,
    filterCategory: filterCategoryReducer,
    sortTracks: sortTracksReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


