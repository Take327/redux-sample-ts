import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addText } from '../Redux/textlist/operations'
import { gettextList } from '../Redux/textlist/selectors'
import { State } from '../Redux/Store/types'

const AddressList: React.FC = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch()
    const selector = useSelector((state: State) => state)

    console.log(gettextList(selector))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={handleChange} /><button onClick={() => { dispatch(addText(inputValue)) }}>追加</button>
            <ul>
                {selector.textlist.resultValue.map((value, index) => { return <li key={index}>{value}</li> })}
            </ul>
        </div>
    )
}

export default AddressList