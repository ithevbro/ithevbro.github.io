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
        <div className={style.sushi_product}>
            <div className={style.sushi_over}><img src={data.image} alt="" /></div>
            <div className={style.sushi_bottom_info}>
                <div className={style.product_weight}>{data.weight}г</div>
                <div className={style.product_title}>{data.title}</div>
                <div className={style.sushi_controllers}>
                    <div className={style.product_price}>{data.price} грн</div>
                    <div>{id && id.q > 0 ? <div><button onClick={() => plusElement(id)}>plus</button><span>{id ? id.q : 0}</span><button onClick={() => minusElement(id)}>minus</button></div> : <button onClick={() => addToCart(data)} className={style.btn_buy}>КУПИТИ</button>}</div>
                </div>
            </div>
            <div className={style.sushi_hidden_block_info}>
                {data.desription}
            </div>
        </div>
    )
}

export default SushiElement