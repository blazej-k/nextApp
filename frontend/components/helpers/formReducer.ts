import { IFormAction, IFormInfo } from "types"

const initReducerState: IFormInfo = {
    email: '',
    password: ''
}

const formReducer = (state: IFormInfo = initReducerState, action: IFormAction) => {
    switch (action.type) {
        case 'email':
            return { ...state, email: action.payload }
        case 'password':
            return { ...state, password: action.payload }
        default:
            throw new Error('Invalid action type')
    }
}

export { formReducer, initReducerState }