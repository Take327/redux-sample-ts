export const addtion: string = 'ADDTION';               //足し算
export const subtraction: string = 'SUBTRACTION';       //引き算
export const multiplication: string = 'MULTIPLICATION'; //掛け算
export const division: string = 'DIVISION';             //割り算


export type Action = {
    type: string,
    data: number
}

export const additionActionCreate = (value: number): Action => {
    return {
        type: addtion,
        data: value
    }
}

export const subtractionActionCreate = (value: number): Action => {
    return {
        type: subtraction,
        data: value
    }
}

export const multiplicationActionCreate = (value: number): Action => {
    return {
        type: multiplication,
        data: value
    }
}

export const divisionActionCreate = (value: number): Action => {
    return {
        type: division,
        data: value
    }
}
