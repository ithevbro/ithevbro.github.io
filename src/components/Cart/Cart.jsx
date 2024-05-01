import { useContext } from 'react'
import { GlobalOverlayState } from '../../global-state/GlobalOverlay'
import style from './cart.module.css'

function Cart() {
    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData

    
    return (
        <div className={style.cart} onClick={()=>setGlobalOverlayData({ type: 'basket' })}>
            <span className={style.quantity_of_products}>2</span>
            <span className={style.cart_price}>635 <span>грн</span></span>
            <span className={style.cart_svg}><img src="/nav-icons/cart.svg" alt="" /></span>
        </div>
    )
}

export default Cart