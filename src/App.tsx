import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux'
import * as actionCreator from './Redux/Actions'
import { Dispatch } from 'redux'

const App: React.FC = (props:any) => {

  console.log(props.calculator.resultValue)

  const [inputValue, setInputValue] = useState<number>(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value))
  }

  return (
    <div className="App">
      計算:<input type="number" onChange={handleChange} />
      <button onClick={() => props.actions.handlePlusButton(inputValue)}>＋</button>
      <button onClick={() => props.actions.handleMinusButton(inputValue)}>ー</button>
      <button onClick={() => props.actions.handleMultplyButton(inputValue)}>×</button>
      <button onClick={() => props.actions.handleDivideButton(inputValue)}>÷</button>
      合計:{props.calculator.resultValue}
      test:{inputValue}
    </div>
  );
}


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

const mapStateToProps = (state: { calculator: number }) => {
  return state;
};

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

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(App);