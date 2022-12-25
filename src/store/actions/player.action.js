import { ActionTypes } from "../constants/actionTypes";

export const selectSong = ({ selectedSong, songType }) => {
  return {
    type: ActionTypes.SELECT_SONG,
    player: { selectedSong, songType },
  };
};
