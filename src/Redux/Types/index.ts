export type CalculatorState = {
    calculator: { resultValue: number }
}


export type AddressListState = {
    addressList: { resultValue: string[] }
}

export type textListState = {
    textReducer: { resultValue: string[] }
}

export type State = CalculatorState & AddressListState & textListState;