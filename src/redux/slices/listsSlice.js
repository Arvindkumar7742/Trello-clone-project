import { createSlice } from "@reduxjs/toolkit";

const listsSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [],
  },
  reducers: {
    // set all lists initial
    setLists: (state, action) => {
      state.lists = action.payload;
    },
    // add new lists
    addNewList: (state, action) => {
      state.lists.push(action.payload);
    },
    // delete a existing lists
    deleteExistingList: (state, action) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload.id);
    },
  },
});

// export the modules
export const { setLists, addNewList, deleteExistingList } = listsSlice.actions;

// export the reducer
export default listsSlice.reducer;
