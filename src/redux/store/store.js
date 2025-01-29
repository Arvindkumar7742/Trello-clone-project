import { configureStore } from "@reduxjs/toolkit";

import boardsReducer from "../slices/boardsSlice";
import listsReducer from "../slices/listsSlice";
import cardsReducer from "../slices/cardsSlice";
import checkListsReducer from "../slices/checkListsSlice";
import checkItemsReducer from "../slices/checkItemsSlice";

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    lists: listsReducer,
    cards: cardsReducer,
    checkLists: checkListsReducer,
    checkItems: checkItemsReducer,
  },
});
