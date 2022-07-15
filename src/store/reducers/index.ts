import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>