import { addTextAction } from './actions'
import { Dispatch } from 'redux'

export const addText = () => {
    return async (dispatch: Dispatch) => {
        const response = await fetch('https://api.github.com/users/Take327').then(res => res.json())
        const userName = response.login;

        dispatch(addTextAction(userName))
    }
}