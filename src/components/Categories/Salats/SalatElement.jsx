import useBasketActions from "../../Cart/BasketActions"
import { BasketContext } from "../../Cart/GlobalStateBasket"
import { useContext } from "react"
import { Link } from "react-router-dom"

function SalatElement({ style, item }) {
    const cartContext = useContext(BasketContext)
    const { addToCart, plusElement, minusElement } = useBasketActions()
    const id = cartContext.cartData.find(prod => prod._id === item._id)

    return (
        <li className={style.prod_element}>
            <div className={style.img_wrapper}><Link to={'/salat/' + item._id}><img src={item.image} alt="" /></Link></div>
            <div className={style.product_description}>
                <p className={style.weight}>{item.weight} Г</p>
                <p className={style.title}><b><Link to={'/salat/' + item._id}>{item.title}</Link></b></p>
                <div className={style.product_controls}>
                    <p><b>{item.price} грн</b></p>
                    {
                        id?.q > 0 ?
                            <div className="minus_plus">
                                <button onClick={() => minusElement(id)}>-</button>
                                <span>{id.q}</span>
                                <button onClick={() => plusElement(id)}>+</button>
                            </div>
                            :
                            <button onClick={() => addToCart(item)} className="prod_buy_btn">КУПИТИ</button>
                    }
                </div>
                <p className={style.description}>{item.desription}</p>
            </div>
        </li >
    )
}

export default SalatElement