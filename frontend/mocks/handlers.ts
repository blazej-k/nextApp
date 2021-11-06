import { rest } from 'msw'
import { IDescription, IGetUser, IUser, IInvalidUser } from 'types'

const login = 'blazej@example.com'

const handlers = [
    rest.get('http://localhost:3000/getDescription', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json<IDescription>({ description: 'We are here to help' })
        )
    }),
    rest.post<IGetUser>('http://localhost:3000/getUser', (req, res, ctx) => {
        if (req.body.email === login) {
            return res(
                ctx.status(200),
                ctx.json<IUser>({ login, token: 101023283828 })
            )
        }
        else {
            return res(
                ctx.status(200),
                ctx.json<IInvalidUser>({ message: 'Ivalid email or password' })
            )
        }
    })
]

export default handlers