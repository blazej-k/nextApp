import { rest } from 'msw'
import { IDescription, IUser } from 'types'

const login = 'blazej@example.com'

const handlers = [
    rest.get('http://localhost:3000/getDescription', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json<IDescription>({ description: 'We are here to help' })
        )
    }),
    rest.post('http://localhost:3000/getUser', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json<IUser>({login: 'blazej@example.com', token: 101023283828})
        )
    })
]

export default handlers