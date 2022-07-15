import { UsersActionType, UsersAction, UsersState } from "../types/users";

const initialState: UsersState = {
  users: [],
}

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionType.GET_USERS:
      return {users: action.payload};
    case UsersActionType.DELETE_USER:
      return {users: state.users.filter((user) => user.id !== action.payload)};
    default: 
      return state;
  }
};