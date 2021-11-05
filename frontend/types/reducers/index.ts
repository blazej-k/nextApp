interface IFormAction {
    type: 'password' | 'email' | 'error'
    payload: string
}

interface IFormInfo {
    email: string
    password: string,
    error: string
}

interface IUser {
    login: string,
    token: string | number,
}

export type { IFormAction, IFormInfo, IUser }