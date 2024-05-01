import style from './basket.module.css'
import { useContext } from 'react'
import { GlobalOverlayState } from '../../global-state/GlobalOverlay'

function Basket() {

    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData

    return (
        <div className={style.basket_container}>
            <h5 className={style.basket_title}>Кошик</h5>
            <form>
                <div className={style.basket_summary}>
                    <div className={style.basket_payment}>
                        <div>До оплати:</div>
                        <div>0 грн</div>
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