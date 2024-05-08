import { useContext } from 'react'
import style from './sushiElement.module.css'
import { BasketContext } from '../../Cart/GlobalStateBasket'
import useBasketActions from '../../Cart/BasketActions'



function SushiElement({ data }) {

    const cartContext = useContext(BasketContext)

    const { addToCart, plusElement, minusElement } = useBasketActions()

    let id = cartContext.cartData.find(i => {
        return i._id === data._id
    })

    return (
        <li className={style.product}>
            <div className={style.sushi_over}><img src={data.image} alt="" /></div>
            <div className={style.sushi_bottom_info}>
                <div className={style.product_weight}>{data.weight}г</div>
                <div className={style.product_title}>{data.title}</div>
                <div className={style.sushi_controllers}>
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
            </div>
            <div className={style.sushi_hidden_block_info}>
                {data.desription}
            </div>
        </li>
    )
}

export default SushiElement