import { createSelector } from "reselect";
import { State } from '../Store/types'


/**
 * stateを引数に受け取り、任意のStateを返却する関数
 * @param state 
 */
const textListSelector = (state: State) => { return state.textlist };


/**
 * createSelectorは第一引数にStateを受け取りState内のオブジェクトを返す関数（上記関数）を配列で受け取る
 * 第二引数に第一引数関数の戻り値から最終的な戻り値を指定する関数を記述する。
 */
export const gettextList = createSelector(
    [textListSelector],
    (textlist) => { return textlist.resultValue }
);