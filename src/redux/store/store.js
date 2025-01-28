import { configureStore } from "@reduxjs/toolkit";

import boardsReducer from "../slices/boardsSlice";
import listsReducer from "../slices/listsSlice";
import cardsReducer from "../slices/cardsSlice";
import checkReducer from "../slices/checkListsSlice";

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    lists: listsReducer,
    cards: cardsReducer,
    checkLists: checkReducer,
  },
});
