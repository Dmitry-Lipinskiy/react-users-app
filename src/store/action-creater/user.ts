import { Dispatch } from "redux";
import http from "../../http";
import { UserActionType } from "../types/user";
import { UserAction } from "../types/user";

export const getUser = (id?: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
      const response = await http.get(`users/${id}`);
      dispatch({type: UserActionType.GET_USER, payload: response.data})
      console.log(response.data);
    }
  }