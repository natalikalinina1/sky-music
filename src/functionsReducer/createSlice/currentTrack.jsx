import { createSlice } from "@reduxjs/toolkit";


export const currentTrackSlice = createSlice({
  name: "currentTrack",
  initialState: { value: "" },
  reducers: {
    setCurrentTrack: (state, action) => {
      state.value = action.payload;
    },
    skipPrevTrack: (state, action) => {
      const trackId = Number(state.value.id);
      const prevTrack = action.payload.find(item => Number(item.id) === trackId - 1);
      if (prevTrack) {
        state.value = createTrackObject(prevTrack);
      }
    },
    skipNextTrack: (state, action) => {
      const trackId = Number(state.value.id);
      const nextTrack = action.payload.find(item => Number(item.id) === trackId + 1);
      if (nextTrack) {
        state.value = createTrackObject(nextTrack);
      }
    },
    skipRandomTrack: (state, action) => {
      let id = Math.floor(Math.random() * (36 + 1));
      if (id < 8) {
        id += 8;
      }
      let randomTrack = action.payload.filter((item) => Number(item.id) === id);
      state.value = createTrackObject(randomTrack[0]);
    },
  },
});

const createTrackObject = (track) => {
  return {
    title: track.name,
    author: track.author,
    album: track.album,
    id: track.id,
    url: track.track_file,
  };
};

export const {
  setCurrentTrack,
  skipPrevTrack,
  skipNextTrack,
  skipRandomTrack,
} = currentTrackSlice.actions;

export default currentTrackSlice.reducer;