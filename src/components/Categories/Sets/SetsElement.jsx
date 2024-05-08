import { useContext } from 'react'
import { BasketContext } from '../../Cart/GlobalStateBasket'
import style from './setsElement.module.css'
import useBasketActions from '../../Cart/BasketActions'

function SetsElement({ data }) {

    const cartContext = useContext(BasketContext)
    const { addToCart, plusElement, minusElement } = useBasketActions()

    let id = cartContext.cartData.find(i => {
        return i._id === data._id
    })

    return (
        <li className={style.sets_product}>
            <div className={style.sets_over}><img src={data.image} alt="" /></div>
            <div className={style.sets_bottom_info}>
                <div className={style.product_weight}>{data.weight}г</div>
                <div className={style.product_title}>{data.title}</div>
                <div className={style.sets_controllers}>
                    <div className={style.product_price}>{data.price} грн</div>
                    {
                        id?.q > 0 ?
                            <div className="minus_plus">
                                <button onClick={() => minusElement(id)}>-</button>
                                <span>{id.q}</span>
                                <button onClick={() => plusElement(id)}>+</button>
                            </div>
                            :
                            <button onClick={() => addToCart(data)} className="prod_buy_btn">КУПИТИ</button>
                    }
                </div>
                <div className={style.sets_hidden_block_info}>
                    {data.desription}
                </div>
            </div>
        </li>
    )
}

export default SetsElement