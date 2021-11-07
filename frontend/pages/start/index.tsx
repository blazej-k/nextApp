import React, { useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { useGetUsers, useUser } from 'hooks'
import { useRouter } from 'next/router'
import { serverRequest } from '../helpers'
import { IOtherUsers, IStart } from 'types'

const Start: NextPage<IStart> = ({ newUsersLength }) => {
    const { user } = useUser()
    const { allUsers, newUsers, getAllUsers, getNewUsers } = useGetUsers()
    const router = useRouter()

    useEffect(() => {
        if (user.token === -1) router.push('/')
    }, [])

    if (user.token !== -1) {
        return (
            <div className="Start">
                <div className="Start-header">
                    <h1>Welcome back {user.login}</h1>
                    <h2>Today we have {newUsersLength} new users</h2>
                </div>
                <div className="Start-content">
                    <div className="actions">
                        <button onClick={getAllUsers}>Get all users</button>
                        <button onClick={getNewUsers}>Get new users</button>
                        <input onChange={() => null} type="text" placeholder='Search specific user...' />
                    </div>
                </div>
            </div>
        )
    }
    else return <div className='loading'>Loading...</div>
}

export const getServerSideProps: GetServerSideProps<IStart> = async () => {
    const ENDPOINT = process.env.GET_NEW_USERS || ''
    const { users }: IOtherUsers = await serverRequest({ URL: ENDPOINT })
    return {
        props: {
            newUsersLength: users.length
        }
    }
}

export default Start