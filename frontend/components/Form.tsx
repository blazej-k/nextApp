import React, { MouseEvent, useEffect, useReducer, useState } from 'react'
import { NextPage } from 'next'
import { IFormAction, IForm } from 'types'
import { formReducer, initReducerState } from './helpers'
import styles from 'styles/Form.module.scss'

const emailValidation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const Form: NextPage<IForm> = ({ haveUserAccount, serverErrorMess, changeHaveUserAccount, handleSubmitForm }) => {

    const [form, dispatch] = useReducer(formReducer, initReducerState)
    const [invalidForm, setInvalidForm] = useState(false)

    useEffect(() => {
        if(serverErrorMess){
            dispatch({type: 'error', payload: serverErrorMess})
        }
    }, [serverErrorMess])

    const submitForm = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!emailValidation.test(email)) dispatch({type: 'error', payload: "E-mail isn't correct"})
        else if(emailValidation.test(email) && password && !error) handleSubmitForm(form)
    }

    const handleInputChange = (arg: IFormAction) => {
        invalidForm && setInvalidForm(false)
        dispatch(arg)
    }

    const { email, password, error } = form
    const disableSubmit = !Boolean(email && password)

    return (
        <div className={styles.Form}>
            <h1>{haveUserAccount ? 'Sign in' : 'Sign up'}</h1>
            <form onSubmit={submitForm}>
                <div className={styles['Form-input-area']}>
                    <label htmlFor="email">E-mail:</label>
                    <input 
                        type="email" 
                        id='email' 
                        onChange={e => handleInputChange({ type: 'email', payload: e.target.value })} 
                    />
                </div>
                <div className={styles['Form-input-area']}>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id='password' 
                        onChange={e => handleInputChange({ type: 'password', payload: e.target.value })} 
                    />
                </div>
                {error && <div className={styles["Form-invalid"]}>{error}</div>}
                <button className={styles['Form-info']} onClick={changeHaveUserAccount}>
                    {haveUserAccount ? "I haven't an account" : "I have an account"}
                </button>
                <button disabled={disableSubmit} className={styles['Form-submit']} type="submit">
                    Ready!
                </button>
            </form>
        </div>
    )
}

export default Form