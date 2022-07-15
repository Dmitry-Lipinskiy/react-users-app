export interface UsersState {
    users: any[];
}

export enum UsersActionType {
    GET_USERS = 'GET_USERS',
    DELETE_USER = 'DELETE_USER'
}

interface GetUsersAction {
    type: UsersActionType.GET_USERS;
    payload: any[];
}

interface DeleteUserAction {
    type: UsersActionType.DELETE_USER;
    payload?: number;
  }

export type UsersAction = GetUsersAction | DeleteUserAction;
