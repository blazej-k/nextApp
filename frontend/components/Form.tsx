import React, { MouseEvent, useReducer } from 'react'
import { NextPage } from 'next'
import { IFormAction, IFormInfo } from 'types'
import styles from 'styles/Form.module.scss'

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
    switch (action.type) {
        case 'email':
            return { ...state, email: action.payload }
        case 'password':
            return { ...state, password: action.payload }
        default:
            throw new Error('Invalid action type')
    }
}

const Form: NextPage<IForm> = ({ haveUserAccount, changeHaveUserAccount, handleSubmitForm }) => {

    const [form, dispatch] = useReducer(formReducer, initReducerState)

    const submitForm = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        email && password && handleSubmitForm(form)
    }

    const handleInputChange = (arg: IFormAction) => {
        dispatch(arg)
    }

    const { email, password } = form
    const disableSubmit = !Boolean(email && password)

    return (
        <div className={styles.Form}>
            <h1>{haveUserAccount ? 'Sign in' : 'Sign up'}</h1>
            <form onSubmit={submitForm}>
                <div className={styles['Form-input-area']}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id='email' onChange={e => handleInputChange({ type: 'email', payload: e.target.value })} />
                </div>
                <div className={styles['Form-input-area']}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' onChange={e => handleInputChange({ type: 'password', payload: e.target.value })} />
                </div>
                <button className={styles['Form-info']} onClick={changeHaveUserAccount}>
                    {haveUserAccount ? "I haven't an account" : "I have an account"}
                </button>
                <button disabled={disableSubmit} className={styles['Form-submit']} type="submit">
                    {haveUserAccount ? 'Sign in' : 'Sign up'}
                </button>
            </form>
        </div>
    )
}

export default Form