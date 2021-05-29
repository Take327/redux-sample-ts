import React, { useState } from 'react';
import { connect } from 'react-redux'
import * as actionCreator from './Redux/Actions'
import { Dispatch } from 'redux'

type StateProps = {
  calculator: { resultValue: number };
}

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
const mapStateToProps = (state: StateProps): StateProps => {
  return state;
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
      handlePlusButton: (value: number) => dispatch(actionCreator.onPlusClick(value)),
      handleMinusButton: (value: number) => dispatch(actionCreator.onMinusClick(value)),
      handleMultplyButton: (value: number) => dispatch(actionCreator.onMultiplyClick(value)),
      handleDivideButton: (value: number) => dispatch(actionCreator.onMultiplyClick(value))
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
    <div className="App">
      計算:<input type="number" onChange={handleChange} value={inputValue} />
      <button onClick={() => props.actions.handlePlusButton(inputValue)}>＋</button>
      <button onClick={() => props.actions.handleMinusButton(inputValue)}>ー</button>
      <button onClick={() => props.actions.handleMultplyButton(inputValue)}>×</button>
      <button onClick={() => props.actions.handleDivideButton(inputValue)}>÷</button>
      合計:{props.calculator.resultValue}
      test:{inputValue}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);