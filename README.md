### 参考サイト
<https://qiita.com/makishy/items/857bb838a2910eb34da3>  
<https://note.kiriukun.com/entry/20200517-react-redux-class-component-and-functional-component-and-hooks-example#repos>
<https://qiita.com/NeGI1009/items/382b54106a79944652a3>

# 環境構築
## ReactとTypescriptをインストール
```
npx create-react-app [プロジェクト名] --typescript
```
## Reduxをインストール
```
npm install redux react-redux
npm install --save-dev @types/react-redux
```
## redux-thunkをインストール
```
npm install --save redux-thunk
npm install --save-dev @types/redux-thunk
```

# Redux手順

## 手順１ Actionを作る
1. ActionはActionTypeとActionCreaterを作る。
2. ActionCreaterは戻り値としてActionオブジェクトを返す。
3. ActionオブジェクトにはtypeプロパティとReducerに渡すデータ（更新したい値）プロパティ入れる

```Javascript
export const PLUS: string = 'PLUS';             //足し算
export const MINUS: string = 'MINUS';           //引き算
export const MULTPLY: string = 'MULTPLY';       //掛け算
export const DIVIDE: string = 'DIVIDE';         //割り算
```

```Javascript
import * as actionTypes from './types'

export const onPlusClick = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.PLUS,
        data: value
    }
};

export const onMinusClick = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.MINUS,
        data: value
    }
};

export const onMultiplyClick = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.MULTPLY,
        data: value
    }
};

export const onDivideClick = (value: number): actionTypes.Action => {
    return {
        type: actionTypes.DIVIDE,
        data: value
    }
};
```
### これでActionは完成
   
## 手順２　Reducerを作る
1. Actionオブジェクトを引数として受け取るReducer関数を作る。
2. 引数には初期値のオブジェクトとActionオブジェクトを設定する。
```Javascript
type Action = {
    type: string,
    data: number
}

const initialAppState: { resultValue: number } = {
    resultValue: 0,
};

const calculator = (state = initialAppState, action: Action): { resultValue: number } => {
    /**
    *ここに処理を書く 
    */
}
```
3. switchでactionのtypeごとに処理を切り分ける。
4. switch内でstateを更新したい内容を書く
5. 初期起動時にはactionのtypeがないので、引数のstateを戻り値として初期化する。
```Javascript
const calculator = (state = initialAppState, action: Action): { resultValue: number } => {
    switch (action.type) {
        case actionTypes.PLUS:
            return {
                resultValue: state.resultValue + action.data
            }
        case actionTypes.MINUS:
            return {
                resultValue: state.resultValue - action.data
            }
        case actionTypes.MULTPLY:
            return {
                resultValue: state.resultValue * action.data
            }
        case actionTypes.DIVIDE:
            return {
                resultValue: state.resultValue / action.data
            }
    }
    return state;
}
```
6. 作成したReducer関数をcombineReducers関数で一つのオブジェクトにまとめる。
```Javascript
import { combineReducers, } from 'redux';
import calculator from './calculator';

const reducer = combineReducers({
    calculator

});

export default reducer;
```
### これでReducerは完成

## 手順3　Storeを作る
1. createStore関数の引数に手順２で作成したreducerオブジェクトをセットし、storeオブジェクトを作成する。
```Javascript
import reducer from '../Reducers'
import { createStore } from 'redux';

const store = createStore(reducer);

export default store;

```
### これでStoreは完成（ここ簡単）

## 手順4　ReactとStoreを接続する
1. React側の「ReactDOM.render()」にStoreを入れる
```Javascript
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
## 手順5　コンポーネントへStateを反映する
1. ### mapStateToPropsを作成する
    「mapStateToProps」は引数にstateが渡されるようになるので、
    コンポーネントに渡したいstateをreturnで戻す。
```Javascript
type StateProps = {
  calculator: { resultValue: number };
}

const mapStateToProps = (state: StateProps): StateProps => {
  return state;
};
```
2. ### mapDispatchToPropsを作成する
    「mapDispatchToProps」は引数にdispatchが渡されるようになるので、
    dispatchを実行する関数をreturnで戻すように作成する。
    その際にdispatchの引数に手順１で作成したActionCreaterをセットする。
```Javascript
type DispatchProps = {
  actions: {
    handlePlusButton: Function,
    handleMinusButton: Function,
    handleMultplyButton: Function,
    handleDivideButton: Function
  }
}

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
```
3. ### コンポーネントを作成する
    propsに「mapStateToProps」と「mapDispatchToProps」の戻り値が渡される。
    stateの更新をするイベントにmapDispatchToPropsの戻り値の関数を実行するよう作成する。
```Javascript
type Props = StateProps & DispatchProps

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
```

4. ### 「mapStateToProps」「mapDispatchToProps」「App」をstoreに接続する。
   「connect」関数を使用しここまでの手順で作成したものをStoreに接続する。
```Javascript
import { connect } from 'react-redux'

~~~~~

export default connect(mapStateToProps, mapDispatchToProps)(App);
```


# re-ducksパターン
## フォルダ構成
以下のようにreducerごとにフォルダを以下のように分ける。  
textlist  
  ├── actions.ts  
  ├── reducers.ts  
  ├── operations.ts  
  ├── selectors.ts  
  └── types.ts  

## operations
コンポーネント側でdispatchの引数として実行する関数を作成する。  
戻り値にアクションオブジェクトを返す。
戻り値に非同期関数を渡すことも可能。  
※redux-thunkをミドルウェアとしてstoreに渡す必要がある。

```Javascript
import { addTextAction } from './actions'

export const addText = (inputUserText: string) => {
    return async (dispatch: Dispatch) => {
        const response = await fetch(`https://api.github.com/users/${inputUserText}`).then(res => res.json());
        const userName = response.login;

        if (userName) {
            dispatch(addTextAction(userName))
        }
    }
}
```
### コンポーネント側
```Javascript
import { addText } from '../Redux/textlist/operations'
import { useDispatch } from 'react-redux'
〜〜〜
const dispatch = useDispatch()
〜〜〜
<button onClick={() => { dispatch(addText(inputValue)) }}>追加</button>
```

## selectors
reselectをインストールする。
```
npm install reselect
```
stateから値を取得するselectorをcreateSelectorで作成する。
第一引数で配列型でstateを受け取りstate内のオブジェクトを返す関数を設定する。
第二引数に第一引数の戻り値を引数に受け取り最終的に戻したい値を戻り値に設定する。
```javascript
export const gettextList = createSelector(
    [(state: State) => { return state.textlist }],
    (textlist:textListState) => { return textlist.resultValue }
);
```
### コンポーネント側
useSelectorはstateを引数に受け取りstate内の任意のオブジェクトを戻すコールバック関数を指定する。
なお、ここではgettextListがstateを引数に受け取る関数を第一引数としているので、戻り値はstateのままにする。
```javascript
import { useSelector } from 'react-redux'
import { gettextList } from '../Redux/textlist/selectors'
〜〜〜
const selector = useSelector((state: State) => { return state })
〜〜〜
<ul>
  {gettextList(selector).map((value, index) => { return <li key={index}>{value}</li> })}
</ul>
```

