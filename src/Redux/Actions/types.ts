/**
 * redux確認要
 */

export const PLUS: string = 'PLUS';             //足し算
export const MINUS: string = 'MINUS';           //引き算
export const MULTPLY: string = 'MULTPLY';       //掛け算
export const DIVIDE: string = 'DIVIDE';         //割り算

export type Action = {
    type: string,
    data: number
}


/**
 * redux-thunk確認要
 */
export const ADD_ADDRESS: string = 'ADD_ADDRESS'  //住所追加
export type AddressAction = {
    type: string,
    data: string
}
