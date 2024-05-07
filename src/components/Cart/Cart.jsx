import { useContext } from 'react'
import { GlobalOverlayState } from '../../global-state/GlobalOverlay'
import style from './cart.module.css'
import { BasketContext } from './GlobalStateBasket'

function Cart() {
    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData
    const dataCart = useContext(BasketContext)
   
    function sum() {
        let sum = 0

        for (let i = 0; i < dataCart.cartData.length; i++) {
            sum += dataCart.cartData[i].price * dataCart.cartData[i].q
        }
        return sum
    }


    return (
        <div className={style.cart} onClick={() => setGlobalOverlayData({ type: 'basket' })}>
            <span className={style.quantity_of_products}>{dataCart.cartData.length}</span>
            <span className={style.cart_price}>{sum()}<span>грн</span></span>
            <span className={style.cart_svg}><img src="/nav-icons/cart.svg" alt="" /></span>
        </div>
    )
}

export default Cart