interface IGetUser {
    email: string,
    password: string
}

interface IServerFailureMessege {
    message: string
}

interface IUser {
    login: string,
    token: string | number,
}

interface INewUsersLength{
    length: number
}

export type { IGetUser, IServerFailureMessege, IUser, INewUsersLength }