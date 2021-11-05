import { IGetUser } from "types"

interface IServerRequest {
    URL?: string,
    reqBody: IGetUser
}

const serverRequest = async ({URL, reqBody}: IServerRequest) => {
    if(!URL) throw new Error(`URL must be string but he is ${typeof URL}`)

    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    }).then(res => res.json())

    return res
}

export { serverRequest }