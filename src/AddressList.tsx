import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addText } from './Redux/textlist/operations'
import * as actionCreator from './Redux/Actions'
import { Dispatch } from 'redux'
import { State } from './Redux/Types'


type StateProps = {
    resultValue: string[]
};

type DispatchProps = {
    actions: {
        handleAddButton: Function
    }
}

type Props = StateProps & DispatchProps


const AddressList: React.FC = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useDispatch()
    const selector = useSelector((state: State) => state)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    console.log(selector)
    return (
        <div>
            <input type="text" onChange={handleChange} /><button onClick={() => { dispatch(addText()) }}>追加</button>
            <ul>
                {selector.textReducer.resultValue.map((value, index) => { return <li key={index}>{value}</li> })}
            </ul>
        </div>
    )
}

export default AddressList