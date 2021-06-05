import React, { useState } from 'react';
import { connect } from 'react-redux'
import * as actionCreator from './Redux/calculator/actions'
import { Dispatch } from 'redux'
import AddressList from './AddressList'
import { State } from './Redux/Store/types'


type StateProps = {
  resultValue: number
};

type DispatchProps = {
  actions: {
    handlePlusButton: Function,
    handleMinusButton: Function,
    handleMultplyButton: Function,
    handleDivideButton: Function
  }
}

type Props = StateProps & DispatchProps

/**
 * Reducerの戻り値がmapStateToPropsの引数で渡される。
 * @param state 
 * @returns 
 */
const mapStateToProps = (state: State): StateProps => {
  console.log(state);
  return state.calculator;
};

/**
 * dispatchが引数として渡されるのでdispatchを実行する関数を戻り値で戻す。
 *
 * @param dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    actions: {
      handlePlusButton: (value: number) => {
        dispatch(actionCreator.plusActionCreator(value))
      },
      handleMinusButton: (value: number) => dispatch(actionCreator.minusActionCreator(value)),
      handleMultplyButton: (value: number) => dispatch(actionCreator.multiplyActionCreator(value)),
      handleDivideButton: (value: number) => dispatch(actionCreator.divideActionCreator(value))
    }
  };
};

/**
 * mapStateToPropsとmapDispatchToPropsの戻り値をPropsとして受け取る。
 * @param props 
 * @returns 
 */
const App: React.FC<Props> = (props: Props) => {
  const [inputValue, setInputValue] = useState<number>(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value))
  }

  return (
    <>
      <div className="App">
        計算:<input type="number" onChange={handleChange} />
        <button onClick={() => props.actions.handlePlusButton(inputValue)}>＋</button>
        <button onClick={() => props.actions.handleMinusButton(inputValue)}>ー</button>
        <button onClick={() => props.actions.handleMultplyButton(inputValue)}>×</button>
        <button onClick={() => props.actions.handleDivideButton(inputValue)}>÷</button>
        合計:{props.resultValue}
        test:{inputValue}
      </div>
      <AddressList />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);