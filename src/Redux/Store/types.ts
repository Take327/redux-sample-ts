export type CalculatorState = { resultValue: number }

export type textListState = { resultValue: string[] }

export type State = {
    calculator: CalculatorState,
    textlist: textListState
}