import React, { useState } from 'react'
import { connect, ConnectedProps, InferableComponentEnhancerWithProps } from 'react-redux'
import { Dispatch } from 'redux'
import { State, CalculatorState } from '../Redux/Store/types'
import * as actionCreator from '../Redux/calculator/actions'

type StateProps = {
    state: CalculatorState
}

type DispatchProps = {
    dispatchActions: {
        onPlusAction: Function,
        onMinusAction: Function,
        onMultplyAction: Function,
        onDivideAction: Function
    }
}

/**
 * Reducerの戻り値がmapStateToPropsの引数で渡される。
 * @param state 
 * @returns 
 */
const mapStateToProps = (state: State): StateProps => {
    return { state: state.calculator };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
    return {
        dispatchActions: {
            onPlusAction: (inputValue: number) => dispatch(actionCreator.plusActionCreator(inputValue)),
            onMinusAction: (inputValue: number) => dispatch(actionCreator.minusActionCreator(inputValue)),
            onMultplyAction: (inputValue: number) => dispatch(actionCreator.multiplyActionCreator(inputValue)),
            onDivideAction: (inputValue: number) => dispatch(actionCreator.divideActionCreator(inputValue)),
        }
    };
};

type PropsFromRedux = ConnectedProps<InferableComponentEnhancerWithProps<StateProps & DispatchProps, {}>>

const Calsulator: React.FC<PropsFromRedux> = ({ state, dispatchActions }) => {
    console.log(connect(mapStateToProps, mapDispatchToProps))

    const [inputValue, setInputValue] = useState<number>(0)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(e.target.value))
    }

    return (
        <div>
            計算:<input type="number" onChange={handleChange} />
            <button onClick={() => dispatchActions.onPlusAction(inputValue)}>＋</button>
            <button onClick={() => dispatchActions.onMinusAction(inputValue)}>ー</button>
            <button onClick={() => dispatchActions.onMultplyAction(inputValue)}>×</button>
            <button onClick={() => dispatchActions.onDivideAction(inputValue)}>÷</button>
            合計: {state.resultValue}
            test: {inputValue}
        </div >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Calsulator)