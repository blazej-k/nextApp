import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import { Form, Header } from 'components'
import { IDescription, IFormInfo, IGetUser, IUser } from 'types'
import server from 'mocks'
import { useState } from 'react'
import { serverRequest } from './helpers'
import { useRouter } from 'next/dist/client/router'


const Home: NextPage<IDescription> = ({ description }) => {

  const [haveUserAccount, setHaveUserAccount] = useState(false)
  const router = useRouter()

  const submitForm = async ({ email, password }: IFormInfo) => {
    const body: IGetUser = { email, password }

    if (!process.env.GET_USER) throw new Error(`URL must be string but he is ${typeof process.env.GET_USER}`)

    const user: IUser = await serverRequest({ URL: process.env.GET_USER, reqBody: body, method: 'POST' })
    router.push('/start')
  }

  return (
    <div className="page">
      <Header description={description} />
      <Form
        haveUserAccount={haveUserAccount}
        changeHaveUserAccount={() => setHaveUserAccount(prev => !prev)}
        handleSubmitForm={submitForm}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps<IDescription> = async () => {
  server.listen()
  let ENDPOINT = process.env.HEADER_DESCRIPTION || ''
  const res = await fetch(ENDPOINT)
  const { description }: IDescription = await res.json()
  server.close()
  return {
    props: {
      description
    }
  }
}

export default Home