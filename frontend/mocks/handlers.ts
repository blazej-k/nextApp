import { rest } from 'msw'
import { IDescription } from 'types'

const handlers = [
    rest.get('http://localhost:3000/getDescription', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json<IDescription>({ description: 'We are here to help' })
        )
    })
]

export default handlers