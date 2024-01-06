import { ADDITIONSC, SUBTRACTSC, MULTIPLYSC, DIVIDESC } from "../actions";

const initialState = {
    skinc: 1
}

export const skincReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case ADDITIONSC: {
            return { skinc: Number(state.skinc) + Number(action.payload)}
        }
        case MULTIPLYSC: {
            return { skinc: state.skinc * action.payload }
        }
        case SUBTRACTSC: {
            return {skinc: action.payload - state.skinc}
        }
        case DIVIDESC: {
            return {skinc: action.payload / state.skinc}
        }
        default: 
        return state
    }
}