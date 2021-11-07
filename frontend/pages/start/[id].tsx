import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const User: NextPage = () => {

    const a = useRouter()
    console.log(a.query.id)

    return(
        <h1>Specific user</h1>
    )
}

export default User