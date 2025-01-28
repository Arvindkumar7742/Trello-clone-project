import { configureStore } from "@reduxjs/toolkit";

import boardsReducer from "../slices/boardsSlice";
import listsReducer from "../slices/listsSlice";

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    lists: listsReducer,
  },
});
