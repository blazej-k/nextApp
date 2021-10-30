import React, { MouseEvent, useReducer } from 'react'
import { NextPage } from 'next'
import { IFormAction, IFormInfo } from 'types'

interface IForm {
    haveUserAccount: boolean,
    changeHaveUserAccount: () => void,
    handleSubmitForm: (form: IFormInfo) => void
}

const initReducerState: IFormInfo = {
    email: '',
    password: ''
}

const formReducer = (state: IFormInfo = initReducerState, action: IFormAction) => {
    switch(action.type){
        case 'email':
            return {...state, email: action.payload}
        case 'password':
            return {...state, password: action.payload}
        default:
            throw new Error('Invalid action type')
    }
}

const Form: NextPage<IForm> = ({haveUserAccount, changeHaveUserAccount, handleSubmitForm}) => {

    const [form, dispatch] = useReducer(formReducer, initReducerState)

    const submitForm = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmitForm(form)
    }

    const handleInputChange = (arg: IFormAction) => dispatch(arg)
    
    return(
        <div className="Form">
            <h1>{haveUserAccount ? 'Sign in' : 'Sign up'}</h1>
            <form onSubmit={submitForm}>
                <label htmlFor="email">E-mail:</label>
                <input type="email"id='email' onChange={e => handleInputChange({type: 'email', payload: e.target.value})} />
                <label htmlFor="password">Password:</label>
                <input type="password" id='password' onChange={e => handleInputChange({type: 'password', payload: e.target.value})}/>
                <button type="submit">Sign in</button>
            </form>
            <button className="Form-info" onClick={changeHaveUserAccount}>
                I have not an account
            </button>
        </div>
    )
}

export default Form