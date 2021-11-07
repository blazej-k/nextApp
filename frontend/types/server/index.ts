interface IServerRequest {
    URL: string,
    reqBody?: object,
    method?: 'POST' | 'GET'
}

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

interface IOtherUser {
    id: string,
    login: string
}

interface IOtherUsers {
    users: IOtherUser[]
}

export type { IServerRequest, IGetUser, IServerFailureMessege, IUser, IOtherUser, IOtherUsers }