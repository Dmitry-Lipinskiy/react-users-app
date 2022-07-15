import { initialValue } from "../../Components/Users/initialValue";
import { IUser } from "../../Components/Users/IUser";
import { UserAction, UserActionType, UserState } from "../types/user";

const initialState: UserState = {
    user: <IUser>(initialValue)
  }
  
  export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
      case UserActionType.GET_USER:
        return {user: action.payload}
      default: 
        return state;
    }
  };