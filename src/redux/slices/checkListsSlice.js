import { createSlice } from "@reduxjs/toolkit";

const checkListsSlice = createSlice({
  name: "checkLists",
  initialState: {
    checkLists: [],
  },
  reducers: {
    // set all the checklists initially
    setCheckLists: (state, action) => {
      state.checkLists = action.payload;
    },
    // add new check List
    addNewCheckList: (state, action) => {
      state.checkLists.push(action.payload);
    },
    // delete an existing check list
    deleteExistingCheckList: (state, action) => {
      state.checkLists = state.checkLists.filter(
        (checklist) => checklist.id !== action.payload.id
      );
    },
  },
});

// export the modules
export const { setCheckLists, addNewCheckList, deleteExistingCheckList } =
  checkListsSlice.actions;

// export the reducer
export default checkListsSlice.reducer;
