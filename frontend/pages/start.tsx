import React, { useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { useUser } from 'hooks'
import { useRouter } from 'next/router'
import { serverRequest } from './helpers'
import { INewUsersLength, IStart } from 'types'

const Start: NextPage<IStart> = ({ newUsers }) => {
    const { user } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (user.token === -1) router.push('/')
    }, [])

    if(user.token !== -1){
        return (
            <div className="Start">
                <h1>Welcome back {user.login}</h1>
                <h2>Today we have {newUsers} new users</h2>
            </div>
        )
    }
    else{
        return(
            <div className='loading'>Loading...</div>
        )
    }

}

export const getServerSideProps: GetServerSideProps<IStart> = async () => {
    const ENDPOINT = process.env.GET_NEW_USERS || ''
    const { length }: INewUsersLength = await serverRequest({ URL: ENDPOINT })
    return {
        props: {
            newUsers: length
        }
    }
}

export default Start