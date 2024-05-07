import { createContext } from "react";

const BasketContext = createContext(null)


function reducerBasket(state, action) {

    if (action.type === 'add') {
        const existingItem = state.find(item => item._id === action.element._id)
        if (existingItem) {
            return state
        } else {
            return [...state, action.element]
        }
    } else if (action.type === 'edit') {

        return state.map(item => {
            if (item._id === action.element._id) {
                return action.element
            } else {
                return item
            }
        })
    } else if (action.type === 'delete') {

        return state.filter(item => {
            if (item._id !== action.element._id) {
                return item
            }
        })
    }
}

export { BasketContext, reducerBasket }
