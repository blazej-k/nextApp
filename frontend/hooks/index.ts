import { UserContext } from "context"
import { useContext } from "react"

const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('Wrap hook in UserProvider')
    }
    return context
}

export { useUser }