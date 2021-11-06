import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import { Form, Header } from 'components'
import { IDescription, IFormInfo, IGetUser, IInvalidUser, IUser } from 'types'
import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { serverRequest } from './helpers'


const Home: NextPage<IDescription> = ({ description }) => {

  const [haveUserAccount, setHaveUserAccount] = useState(false)
  const [serverErrorMess, setServerErrorMess] = useState('')
  const router = useRouter()

  const submitForm = async ({ email, password }: IFormInfo) => {
    if (!process.env.GET_USER) throw new Error(`URL must be string but he is ${typeof process.env.GET_USER}`)
    const reqBody: IGetUser = { email, password }
    const ENDPOINT = process.env.GET_USER
    const res: IUser | IInvalidUser = await serverRequest({ URL: ENDPOINT, reqBody, method: 'POST' })
    'token' in res ? router.push('/start') : setServerErrorMess(res.message)
  }

  return (
    <div className="page">
      <Header description={description} />
      <Form
        serverErrorMess={serverErrorMess}
        haveUserAccount={haveUserAccount}
        changeHaveUserAccount={() => setHaveUserAccount(prev => !prev)}
        handleSubmitForm={submitForm}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps<IDescription> = async () => {
  let ENDPOINT = process.env.HEADER_DESCRIPTION || ''
  const { description }: IDescription = await serverRequest({ URL: ENDPOINT })
  return {
    props: {
      description
    }
  }
}

export default Home