import { useContext } from "react"
import { BasketContext } from "./GlobalStateBasket"


function useBasketActions() {

    const cartContext = useContext(BasketContext)

    // localStorage.setItem('prod', JSON.stringify(cartContext.cartData))


    function addToCart(el) {
        cartContext.setCartData({
            type: 'add',
            element: { ...el, q: 1 }
        })

    }

    function plusElement(id) {
        if (id) {
            cartContext.setCartData({
                type: 'edit',
                element: { ...id, q: id.q + 1 }
            })
        }
    }


    function minusElement(id) {
        if (id.q === 1) return
        if (id) {
            cartContext.setCartData({
                type: 'edit',
                element: { ...id, q: id.q - 1 }
            })
        }
    }


    function removeFromCart(item) {
        cartContext.setCartData({
            type: 'delete',
            element: item
        })
    }


    return {
        addToCart,
        plusElement,
        minusElement,
        removeFromCart
    }

}


export default useBasketActions