import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addText } from '../Redux/textlist/operations'
import { gettextList } from '../Redux/textlist/selectors'
import { State } from '../Redux/Store/types'

/**
 * ReduxのHooksを使用してStoreにアクセスするコンポーネントです。
 * connectを使用してReduxに接続するよりこっちのほうが楽です。
 * 
 * @returns 
 */


const AddressList: React.FC = () => {

    const [inputValue, setInputValue] = useState<string>('');
    /**
     * useDispatchを使用するとdispatch()を作成することができる。
     * useDispatch()の実行結果は必ず一回定数に代入する必要がある。
     */
    const dispatch = useDispatch()
    /**
     * 
     * useSelectorはStateを引数とするコールバック関数を引数にセットする。
     * ここで作成したselectorオブジェクトをselectorsの引数として渡す
     * 
     */
    const selector = useSelector((state: State) => { return state })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={handleChange} /><button onClick={() => { dispatch(addText(inputValue)) }}>追加</button>
            <ul>
                {gettextList(selector).map((value, index) => { return <li key={index}>{value}</li> })}
            </ul>
        </div>
    )
}

export default AddressList