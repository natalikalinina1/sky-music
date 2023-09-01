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

const store = configureStore({
  reducer: {
    currentTrack: currentTrackReducer,
    currentAlbum: currentAlbumReducer,
    playingStatus: playingStatusReducer,
    actionStatus: actionStatusReducer,
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


