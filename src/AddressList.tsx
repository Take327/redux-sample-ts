import React, { useState } from 'react';
import { connect } from 'react-redux'
import * as actionCreator from './Redux/Actions'
import { Dispatch } from 'redux'
import { State } from './Redux/Types'


type StateProps = {
    resultValue: string[]
};

const mapStateToProps = (state: State): StateProps => {
    return state.addressList;
};


type DispatchProps = {
    actions: {
        handleAddButton: Function
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        actions: {
            handleAddButton: (value: string) => {
                actionCreator.onAddAddressClick(dispatch,value)
            }
        }
    };
};

type Props = StateProps & DispatchProps


const AddressList: React.FC<Props> = (props) => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    
    return (
        <div>
            <input type="text" onChange={handleChange} /><button onClick={() => { props.actions.handleAddButton(inputValue) }}>追加</button>
            <ul>
                {props.resultValue.map((value,index)=>{
                    return <li key={index}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressList)