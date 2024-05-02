import { getProds } from "../../../service/services"
import style from './pizza.module.css'
import PizzaElement from "./PizzaElement"

function Pizza() {
    let products = getProds('pizza')

    return (
        <section className={style.section_wrapper}>
            <h1>Піца у Львові</h1>
            <aside></aside>
            <ul className={style.prod_list}>{products.map(item => {
                return <PizzaElement key={item._id} item={item} style={style} />
            })}</ul>
        </section>
    )
}

export default Pizza