interface IDescription {
    description: string
}

interface IGetUser {
    email: string,
    password: string
}

interface IInvalidUser {
    message: string
}

export type { IDescription, IGetUser, IInvalidUser }