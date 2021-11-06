import { IUser } from "types";

interface IUserContext {
    user: IUser,
    changeUserData: (args: IUserReducerAction) => void
}

interface IUserReducerAction {
    type: 'signin',
    payload: IUser
}

export type { IUserContext, IUserReducerAction }