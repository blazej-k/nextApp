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

export type { IGetUser, IServerFailureMessege, IUser }