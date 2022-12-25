import { ActionTypes } from "../constants/actionTypes";

const playerInitialState = {
  isLoading: false,
  selectedSong: null,
  songType: "isPreview",
};
export default function playerReducer(state = playerInitialState, { type, player }) {
  switch (type) {
    case ActionTypes.SELECT_SONG:
      return { ...state, selectedSong: player.selectedSong, songType: player.songType };
    default:
      return state;
  }
}
