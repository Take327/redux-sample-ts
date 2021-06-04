import { addTextAction } from './actions'
import { Dispatch } from 'redux'

export const addText = (inputUserText: string) => {
    return async (dispatch: Dispatch) => {
        const response = await fetch(`https://api.github.com/users/${inputUserText}`).then(res => res.json());
        const userName = response.login;

        if (userName) {
            dispatch(addTextAction(userName))
        }
    }
}