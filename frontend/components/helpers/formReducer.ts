import { IFormAction, IFormInfo } from "types"

const initReducerState: IFormInfo = {
    email: '',
    password: '',
    error: ''
}

const formReducer = (state: IFormInfo = initReducerState, action: IFormAction) => {
    switch (action.type) {
        case 'email':
            return { ...state, email: action.payload, error: '' }
        case 'password':
            return { ...state, password: action.payload, error: '' }
        case 'error':
            return { ...state, error: action.payload }
        default:
            throw new Error('Invalid action type')
    }
}

export { formReducer, initReducerState }