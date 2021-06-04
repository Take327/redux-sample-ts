export type CalculatorState = {
    calculatorReducer: { resultValue: number }
}

export type textListState = {
    textReducer: { resultValue: string[] }
}

export type State = CalculatorState & textListState;