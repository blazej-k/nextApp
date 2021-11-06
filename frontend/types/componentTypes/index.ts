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

export type { IHeader, IForm }