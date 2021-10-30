import React, { MouseEvent, useState } from 'react'
import { NextPage } from 'next'
import { IFormInfo } from 'types'

interface IForm {
    haveUserAccount: boolean,
    changeHaveUserAccount: () => void,
    handleSubmitForm: (form: IFormInfo) => void
}

const Form: NextPage<IForm> = ({haveUserAccount, changeHaveUserAccount, handleSubmitForm}) => {


    const submitForm = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault()
        // handleSubmitForm(form)
    }
    
    return(
        <div className="Form">
            <h1>{haveUserAccount ? 'Sign in' : 'Sign up'}</h1>
            <form onSubmit={submitForm}>
                <label htmlFor="email">E-mail:</label>
                <input type="email"id='email' />
                <label htmlFor="password">Password:</label>
                <input type="password" id='password'/>
                <button type="submit">Sign in</button>
            </form>
            <button className="Form-info" onClick={changeHaveUserAccount}>
                I have not an account
            </button>
        </div>
    )
}

export default Form