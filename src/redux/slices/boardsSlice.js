import { createSlice } from "@reduxjs/toolkit";

const boardsSlice = createSlice({
  name: "board",
  initialState: {
    boards: [],
  },
  reducers: {
    // action to set all the boards
    setBoards: (state, action) => {
      state.boards = action.payload;
    },
    // action to add new boards
    addNewBoard: (state, action) => {
      state.boards.push(action.payload);
    },
  },
});

// export the modules
export const { setBoards, addNewBoard } = boardsSlice.actions;

// export the reducer
export default boardsSlice.reducer;
