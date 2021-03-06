import { IFormInfo } from "types";

interface IHeader {
    description: string
}

interface IForm {
    haveUserAccount: boolean,
    serverErrorMess: string,
    changeHaveUserAccount: () => void,
    handleSubmitForm: (form: IFormInfo) => void
}

interface IStart {
    newUsersLength: number
}

export type { IHeader, IForm, IStart }