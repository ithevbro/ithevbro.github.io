import { useContext, useEffect, useState } from "react"
import { SouseContext } from "../FreeSouses/GlobalStateSouse"
import useBasketActions from "./BasketActions"
import { BasketContext } from "./GlobalStateBasket"
import FreeSouses from "../FreeSouses/FreeSouses"
import style from './orderBasket.module.css'


function OrderBasket() {

    const dataCart = useContext(BasketContext)
    const souseData = useContext(SouseContext)
    const { plusElement, minusElement, removeFromCart } = useBasketActions()
    const [callMe, setCallMe] = useState(false)

    function sum() {
        let sum = 0

        for (let i = 0; i < dataCart.cartData.length; i++) {
            sum += dataCart.cartData[i].price * dataCart.cartData[i].q
        }

        if (checkSushi()) {
            sum += souseData.souseData.totalSoy
            sum += souseData.souseData.totalSet
        }
        sum += 45
        if (sum === 45) return 0
        return sum
    }

    function checkSushi() {
        let res = false
        for (let i = 0; i < dataCart.cartData.length; i++) {
            if (dataCart.cartData[i].productType === 'sushi')
                res = true
        }
        return res
    }


    return (
        <>
            {dataCart.cartData && dataCart.cartData?.map((item) => {
                return (
                    <div key={item._id} className={style.basket_element_in_list}>
                        <div className={style.basket_element_in_list_image}><img src={item.image} alt="" /></div>
                        <div className={style.basket_element_info}>
                            <div className={style.basket_element_weight}>{item.weight} г</div>
                            <div className={style.basket_element_title}>{item.title}</div>
                            {item.bortyk && <div className={style.basket_element_weight}>Сирний бортик {item.size} x 1</div>}
                        </div>
                        <div className={style.bottom_info}>
                            <div className={style.btn_cont}>
                                <button className={style.basket_buy_button} onClick={(e) => {
                                    e.preventDefault()
                                    minusElement(item)
                                }}>
                                    -
                                </button>
                                <span className={style.item_quantity}>{item.q}</span>
                                <button className={style.basket_buy_button} onClick={(e) => {
                                    e.preventDefault()
                                    plusElement(item)
                                }}>
                                    +
                                </button>
                            </div>
                            <div className={style.prive_quant}>{item.price * item.q}<span> грн</span></div>
                        </div>
                        <div className={style.btn_delete_from_cart} onClick={(e) => {
                            e.preventDefault()
                            removeFromCart(item)
                        }}></div>
                    </div>
                )
            })}
            {checkSushi() && <FreeSouses />}
            <label className={style.checkbox_container}>Мені можна не телефонувати для підтвердження замовлення
                <input type="checkbox" checked={callMe} onChange={(e) => setCallMe(e.target.checked)} />
                <span className={style.check_mark}><img className={callMe ? style.active_image : style.none_active_image} src="https://smaki-maki.com/wp-content/themes/smaki/img/icons/icon-select.svg" alt="" /></span>
            </label>
            <hr className={style.border_bottom_basket} />
            <div className={style.cont_payment_basket}>
                {sum() < 1 && <div className={style.min_order_info}>
                    Сума мінімального замовлення в Зеленій зоні - 400 грн, у Жовтій зоні - 700 грн. В суму мінімального замовлення не входять напої
                </div>}
                <div className={style.basket_summary}>
                    {sum() > 0 && <div className={style.basket_display_info_sum}>
                        <div className={style.sum_info}>
                            <div>Загальна вартість:</div>
                            <div><b className={style.color_digit}>{sum()} грн</b></div>
                        </div>
                        <div className={style.sum_info}>
                            <div>Вартість упакування:</div>
                            <div><b className={style.color_digit}>45 грн</b></div>
                        </div>
                        <div className={style.sum_info}>
                            <div><b>Знижка:</b></div>
                            <div><b className={style.color_digit}>0 грн</b></div>
                        </div>
                    </div>}
                    <div className={style.basket_payment}>
                        <div>До оплати:</div>
                        <div>{sum()} грн</div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default OrderBasket