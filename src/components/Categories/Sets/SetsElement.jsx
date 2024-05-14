import { useContext } from 'react'
import { BasketContext } from '../../Cart/GlobalStateBasket'
import style from './setsElement.module.css'
import useBasketActions from '../../Cart/BasketActions'
import { Link } from 'react-router-dom'

function SetsElement({ data }) {

    const cartContext = useContext(BasketContext)
    const { addToCart, plusElement, minusElement } = useBasketActions()

    let id = cartContext.cartData.find(i => {
        return i._id === data._id
    })

    return (
        <li className={style.sets_product}>
            <div className={style.img_wrapper}><Link to={'/sets/' + data._id}><img src={data.image} alt="" /></Link></div>
            <div className={style.sets_bottom_info}>
                <div className={style.product_weight}>{data.weight}г</div>
                <div className={style.product_title}><Link to={'/sets/' + data._id}>{data.title}</Link></div>
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