import { createContext } from "react";

const SouseContext = createContext(null)


function reducerSouse(state, action) {

    if (action.type === 'souse') {
        return action.elem
    } else if (action.type === 'edit') {
        return { ...state, ...action.elem }
    } else if (action.type === 'remove') {
        return action.elem
    }

}

export { SouseContext, reducerSouse }
