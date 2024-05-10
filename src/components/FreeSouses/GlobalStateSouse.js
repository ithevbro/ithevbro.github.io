import { createContext } from "react";

const SouseContext = createContext(null)


function reducerSouse(state, action) {
   
    if (action.type === 'souse') {
        return action.elem
    } else if (action.type === 'edit') {
        return { ...state, ...action.elem }
    }

}

export { SouseContext, reducerSouse }
