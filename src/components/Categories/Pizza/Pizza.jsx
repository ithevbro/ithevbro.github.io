import { getProds } from "../../../service/services"
import style from './pizza.module.css'
import PizzaElement from "./PizzaElement"
import LoaderMain from "../../Loaders/Loader-main"

function Pizza() {
    let { products, loading } = getProds('pizza')

    return (
        <section className={style.section_wrapper}>
            <h1>Піца у Львові</h1>
            <aside></aside>
            {loading ? <LoaderMain /> :
                <ul className={style.prod_list}>
                    {products.map(item => (
                        <PizzaElement key={item._id} item={item} style={style} />
                    ))}
                </ul>
            }
        </section>
    )
}

export default Pizza