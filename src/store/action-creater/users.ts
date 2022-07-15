import { Dispatch } from "redux";
import http from "../../http";
import { UsersActionType, UsersAction } from "../types/users";

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    const response = await http.get('users');
    dispatch({type: UsersActionType.GET_USERS, payload: response.data})
  }
}

export const deleteUser = (id?: number) => {
  const isDelete = window.confirm('Really delete this user?');
  if (isDelete) {
    return async (dispatch: Dispatch<UsersAction>) => {
      const response = await http.delete(`users/${id}`);
      if (response.status == 200) {
        dispatch({type: UsersActionType.DELETE_USER, payload: id});
        console.log(response.data);
      }
    }
  }
}

// getUsers = () => {
//   http.get('users').then((res) => {
//     setUsers(res.data);
//     console.log(res.data);
//   }).catch((err) => console.log(err));
// }