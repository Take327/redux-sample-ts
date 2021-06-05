export type CalculatorState = {
    calculator: { resultValue: number }
}

export type textListState = {
    textlist: { resultValue: string[] }
}

export type State = CalculatorState & textListState;