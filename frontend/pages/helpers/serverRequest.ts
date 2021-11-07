interface IServerRequest {
    URL: string,
    reqBody?: object,
    method?: 'POST' | 'GET'
}

const serverRequest = async ({ URL, reqBody, method = 'GET' }: IServerRequest) => {
    if (!URL) throw new Error(`URL must be string but he is ${typeof URL}`)
    const res = await fetch(URL, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: reqBody ? JSON.stringify(reqBody) : null
    }).then(res => res.json())

    return res
}

export default serverRequest 