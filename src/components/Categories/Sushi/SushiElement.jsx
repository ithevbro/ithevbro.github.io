import { useContext } from 'react'
import style from './sushiElement.module.css'
import { BasketContext } from '../../Cart/GlobalStateBasket'
import useBasketActions from '../../Cart/BasketActions'
import { Link } from 'react-router-dom'


function SushiElement({ data }) {

    const cartContext = useContext(BasketContext)

    const { addToCart, plusElement, minusElement } = useBasketActions()

    let id = cartContext.cartData.find(i => {
        return i._id === data._id
    })

    return (
        <li className={style.product}>
            <div className={style.img_wrapper}><Link to={'/sushi/' + data._id}><img src={data.image} alt="" /></Link></div>
            <div className={style.sushi_bottom_info}>
                <div className={style.product_weight}>{data.weight}г</div>
                <div className={style.product_title}><Link to={'/sushi/' + data._id}>{data.title}</Link></div>
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