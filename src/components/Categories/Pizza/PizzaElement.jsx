import { useState } from "react"

function PizzaElement({ item, style }) {

    const [pizzaSize, setPizzaSize] = useState(22)
    const [bortik, setBortik] = useState(false)

    function currentSize(size) {
        setBortik(false)
        setPizzaSize(size)
    }

    function toggleBortik() {
        setBortik(!bortik)
    }

    return (
        <li className={style.pizza_element}>
            <img src={item.image} alt="" />
            <div className={style.product_description}>
                <p className={style.weight}>{item.weight} Г</p>
                <p><b>{item.title}</b></p>
                <div className={style.product_controls}>
                    <p><b>{item.price} грн</b></p>
                    <button className="prod_buy_btn">КУПИТИ</button>
                    <div className="minus_plus">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
                <ul className={style.pizza_size}>
                    <li id={pizzaSize === 22 ? style.current_pizza_size : ''} onClick={() => currentSize(22)}>22 см</li>
                    <li id={pizzaSize === 30 ? style.current_pizza_size : ''} onClick={() => currentSize(30)}>30 см</li>
                    <li id={pizzaSize === 40 ? style.current_pizza_size : ''} onClick={() => currentSize(40)}>40 см</li>
                </ul>
                {pizzaSize > 22 ? <button onClick={toggleBortik} className={`${style.bortik} ${bortik ? style.bortiktrue : ''}`}>{bortik ? 'Видалити сирний бортик' : 'Додати сирний бортик'}</button> : null}
                <p>{item.desription}</p>
            </div>
        </li >
    )
}

export default PizzaElement