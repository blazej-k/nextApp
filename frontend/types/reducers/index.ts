interface IFormAction {
    type: 'password' | 'email'
    payload: string
}

interface IFormInfo {
    email: string
    password: string
}

export type {IFormAction, IFormInfo}