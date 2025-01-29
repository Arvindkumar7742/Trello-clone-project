import { createSlice } from "@reduxjs/toolkit";

const checkItemsSlice = createSlice({
  name: "checkItems",
  initialState: {
    checkListCheckItems: [],
  },
  reducers: {
    // add new cards in the existing cards
    pushCheckItems: (state, action) => {
      state.checkListCheckItems.push(action.payload);
    },
    // to add new check items
    addNewCheckItem: (state, action) => {
      const { checklistId, newCheckItem } = action.payload;
      const findCheckListCheckItems = state.checkListCheckItems.find(
        (checkListCheckItem) => checkListCheckItem.checkListId === checklistId
      );
      findCheckListCheckItems.checkItems.push(newCheckItem);
    },
    // action to delete an checkItem
    deleteExistingCheckItem: (state, action) => {
      const { checkListId, checkItemId } = action.payload;
      state.checkListCheckItems = state.checkListCheckItems.map(
        (checkListCheckItem) => {
          if (checkListCheckItem.checkListId == checkListId) {
            return {
              checkItems: checkListCheckItem.checkItems.filter(
                (checkItem) => checkItem.id != checkItemId
              ),
              checkListId,
            };
          }
          return checkListCheckItem;
        }
      );
    },
    // to updated an existing check item
    updateExistingCheckItem: (state, action) => {
      const { checkListId, checkItemId, status } = action.payload;
      state.checkListCheckItems = state.checkListCheckItems.map(
        (checkListCheckItem) => {
          if (checkListCheckItem.checkListId == checkListId) {
            const findCheckItem = checkListCheckItem.checkItems.find(
              (checkItem) => checkItem.id === checkItemId
            );
            findCheckItem.state = status;
            return checkListCheckItem;
          }
          return checkListCheckItem;
        }
      );
    },
  },
});

// export the modules
export const {
  pushCheckItems,
  addNewCheckItem,
  deleteExistingCheckItem,
  updateExistingCheckItem,
} = checkItemsSlice.actions;

// export the reducer
export default checkItemsSlice.reducer;
