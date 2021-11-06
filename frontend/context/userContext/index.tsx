import React, { createContext, FC, useReducer } from "react";
import { IUser, IUserContext, IUserReducerAction } from "types";

const initUserContext: IUser = {
    token: -1,
    login: ''
}

const userReducer = (state: IUser, action: IUserReducerAction) => {
    switch (action.type) {
        case 'signin':
            return action.payload
        default:
            return state
    }
}

const UserProvider: FC = ({ children }) => {

    const [user, dispatch] = useReducer(userReducer, initUserContext)

    const changeUserData = (args: IUserReducerAction) => dispatch(args)

    return (
        <UserContext.Provider value={{ user, changeUserData }}>
            {children}
        </UserContext.Provider>
    )
}


const UserContext = createContext<IUserContext>({
    user: initUserContext,
    changeUserData: () => null
})

export default UserProvider
export { UserContext }