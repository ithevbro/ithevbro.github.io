import style from './basket.module.css'
import { useContext } from 'react'
import { GlobalOverlayState } from '../../global-state/GlobalOverlay'
import { BasketContext } from './GlobalStateBasket'
import useBasketActions from './BasketActions'

function Basket() {

    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData
    const dataCart = useContext(BasketContext)

    const { plusElement, minusElement, removeFromCart } = useBasketActions()

    function sum() {
        let sum = 0

        for (let i = 0; i < dataCart.cartData.length; i++) {
            sum += dataCart.cartData[i].price * dataCart.cartData[i].q
        }
        return sum
    }


    return (
        <div className={style.basket_container}>
            <h5 className={style.basket_title}>Кошик</h5>
            <form>
                {dataCart.cartData && dataCart.cartData?.map((item) => {
                    return (
                        <div key={item._id}>
                            <div>{item.title}{item.q}</div>
                            <button onClick={(e) => {
                                e.preventDefault()
                                plusElement(item)
                            }}>plus</button>
                            <button onClick={(e) => {
                                e.preventDefault()
                                minusElement(item)
                            }}>minus</button>
                            <button onClick={(e) => {
                                e.preventDefault()
                                removeFromCart(item)
                            }}>delete</button>
                        </div>
                    )
                })}
                <div className={style.basket_summary}>
                    <div className={style.basket_payment}>
                        <div>До оплати:</div>
                        <div>{sum()} грн</div>
                    </div>
                    <div className={style.delivery_text}>Сума мінімального замовлення в Зеленій зоні - 400 грн, у Жовтій зоні - 700 грн. В суму мінімального замовлення не входять напої</div>
                    <button className={style.basket_buy_button}>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
                </div>
            </form>
            <a className={style.enter_in_account} onClick={(e) => {
                e.preventDefault()
                setGlobalOverlayData({ type: 'login' })
            }} href="">Увійти в особистий кабінет</a>
            <div className={style.close_busket_btn} onClick={() => setGlobalOverlayData({ type: 'main' })}></div>
        </div>
    )
}

export default Basket