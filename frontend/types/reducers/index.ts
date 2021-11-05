interface IFormAction {
    type: 'password' | 'email' | 'error'
    payload: string
}

interface IFormInfo {
    email: string
    password: string,
    error: string
}

export type {IFormAction, IFormInfo}