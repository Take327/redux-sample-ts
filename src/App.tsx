import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import store from './Redux/Store'
import { useDispatch, useSelector } from "react-redux";

const App = (props: any) => {

  console.log(props);
  const { currentValue, clickCount } = props;
  const dispatch = useDispatch();

  return (
    <div className="App">
      計算:<input type="number" /><button>＋</button><button>ー</button><button>×</button><button>÷</button>合計:{props.resultValue}
    </div>
  );
}

const mapStateToProps = (state:any) => {
  console.log(state.calculator.resultValue);
  return state.calculator
};

const mapDispatchToProps = (dispatch:any) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);