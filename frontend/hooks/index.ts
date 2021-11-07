import { UserContext } from "context"
import { serverRequest } from "pages/helpers"
import { useContext, useState } from "react"
import { IOtherUser, IOtherUsers, IUser } from "types"

const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('Wrap hook in UserProvider')
    }
    return context
}

const useGetUsers = () => {
    const [allUsers, setAllUsers] = useState<IOtherUser[]>([])
    const [newUsers, setNewUsers] = useState<IOtherUser[]>([])

    const fetchData = async (URL: string) => await serverRequest({ URL })

    const getAllUsers = async () => {
        const ENDPOINT = process.env.GET_ALL_USERS || ''
        const { users }: IOtherUsers = await fetchData(ENDPOINT)
        setAllUsers(users)
    }


    const getNewUsers = async () => {
        const ENDPOINT = process.env.GET_NEW_USERS || ''
        const { users }: IOtherUsers = await fetchData(ENDPOINT)
        setNewUsers(users)
    }

    return { allUsers, newUsers, getAllUsers, getNewUsers }
}

export { useUser, useGetUsers }