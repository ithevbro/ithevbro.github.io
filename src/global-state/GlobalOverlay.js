import { createContext } from "react";
const GlobalOverlayState = createContext(null)

function overlayReducer(state, action) {
    let formState = { ...state, [action.type]: true }
    for (const key in formState) {
        if (key == action.type && key == 'main') {
            return { main: false }
        } else if (key == action.type || key == 'main') {
            formState[key] = true
        } else {
            formState[key] = false
        }
    }
    return formState
}

export { GlobalOverlayState, overlayReducer }