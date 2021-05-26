import React, { useState } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { useDispatch } from "react-redux";
import * as actionCreator from './Redux/Actions'

const App = (props: any) => {
  const dispatch = useDispatch();

  const handlePlusButton = (value: number) => {
    dispatch(actionCreator.onPlusClick(value));
  };

  const handleMinusButton = (value: number) => {
    dispatch(actionCreator.onMinusClick(value));
  };

  const handleMultplyButton = (value: number) => {
    dispatch(actionCreator.onMultiplyClick(value));
  }

  const handleDivideButton = (value: number) => {
    dispatch(actionCreator.onDivideClick(value));
  }


  const [inputValue, setInputValue] = useState<number>(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value))
  }

  return (
    <div className="App">
      計算:<input type="number" onChange={handleChange} />
      <button onClick={() => handlePlusButton(inputValue)}>＋</button>
      <button onClick={() => handleMinusButton(inputValue)}>ー</button>
      <button onClick={() => handleMultplyButton(inputValue)}>×</button>
      <button onClick={() => handleDivideButton(inputValue)}>÷</button>
      合計:{props.resultValue}
      test:{inputValue}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return state.calculator
};

const mapDispatchToProps = (dispatch: any) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);