import React from 'react';
import Calsulator from './components/Calsulator'
import AddressList from './components/AddressList'

/**
 * Reducerの戻り値がmapStateToPropsの引数で渡される。
 * @param state 
 * @returns 
 */

/**
 * dispatchが引数として渡されるのでdispatchを実行する関数を戻り値で戻す。
 *
 * @param dispatch 
 * @returns 
 */


/**
 * mapStateToPropsとmapDispatchToPropsの戻り値をPropsとして受け取る。
 * @param props 
 * @returns 
 */
const App: React.FC = () => {

  return (
    <>
      <Calsulator />
      <AddressList />
    </>
  );
}

export default App;