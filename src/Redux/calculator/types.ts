export const PLUS: string = 'PLUS';             //足し算
export const MINUS: string = 'MINUS';           //引き算
export const MULTPLY: string = 'MULTPLY';       //掛け算
export const DIVIDE: string = 'DIVIDE';         //割り算

export type Action = {
    type: string,
    data: number
}