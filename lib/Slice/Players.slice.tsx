import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//types
import { Player } from "@/utils/Types";

export interface PlayerState {
  playersList: Player[];
}

const initialState: PlayerState = {
  playersList: [],
};

export const playerSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setPlayerList: (state, action: PayloadAction<Player[]>) => {
      state.playersList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlayerList } = playerSlice.actions;

export default playerSlice.reducer;
