import React, { useLayoutEffect } from 'react'
import { NextPage } from 'next'
import { useUser } from 'hooks'
import { useRouter } from 'next/router'

const Start: NextPage = () => {
    const { user } = useUser()
    const router = useRouter()
    useLayoutEffect(() => {
        if (user.token === -1) router.push('/')
    }, [])
    return (
        <h1>{user.login}</h1>
    )
}

export default Start