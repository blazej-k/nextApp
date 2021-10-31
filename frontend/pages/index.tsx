import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import { Form, Header } from 'components'
import { IDescription, IFormInfo } from 'types'
import server from 'mocks'
import { useState } from 'react'


const Home: NextPage<IDescription> = ({ description }) => {

  const [haveUserAccount, setHaveUserAccount] = useState(false)

  const submitForm = (form: IFormInfo) => {
    console.log(form)
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