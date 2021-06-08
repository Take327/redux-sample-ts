import React, { useState } from 'react'
import { connect, ConnectedProps, InferableComponentEnhancerWithProps } from 'react-redux'
import { Dispatch } from 'redux'
import { State, CalculatorState } from '../Redux/Store/types'
import * as actionCreator from '../Redux/calculator/actions'

/**
 * このコンポーネントはconnectを使用してReduxと接続するコンポーネントです。
 * 結論としてはHooksを使用しStateとDispatchを取得したほうが楽です。
 * このコンポーネントはconnectの使用方法の確認用に残しています。
 */


//--------------------------------------------------------------------------------------------------------------------------------------
type StateProps = {
    state: CalculatorState
}
/**
 * stateがmapStateToPropsの引数で渡される。
 * returnで戻す値がPropsとしてコンポーネントに渡される。
 * @param state 
 * @returns 
 */
const mapStateToProps = (state: State): StateProps => {
    return { state: state.calculator };
};

//--------------------------------------------------------------------------------------------------------------------------------------
type DispatchProps = {
    dispatchActions: {
        onPlusAction: Function,
        onMinusAction: Function,
        onMultplyAction: Function,
        onDivideAction: Function
    }
}
/**
 * 引数にdispatchを持つ関数
 * returnで戻す関数がPropsとしてコンポーネントに渡されるのでその関数をコンポーネント内で実行しdispatchする。
 * @param dispatch 
 */
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

//--------------------------------------------------------------------------------------------------------------------------------------

/**
 * Propsの型を作成する。
 * 代用の記載方法としていかがある。
 * const connector = connect(mapStateToProps, mapDispatchToProps);
 * type PropsFromRedux = ConnectedProps<typeof connector>;
 * 
 * 上記記載方法だとconnectでオブジェクトを作成しその型でPropsFromRedux型を作成する。
 */
type PropsFromRedux = ConnectedProps<InferableComponentEnhancerWithProps<StateProps & DispatchProps, {}>>


/**
 * Props型は上記でConnectedPropsを使用し作成したタイプを使用する必要がある。
 * @param param0 
 * @returns 
 */
const Calsulator: React.FC<PropsFromRedux> = ({ state, dispatchActions }) => {
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