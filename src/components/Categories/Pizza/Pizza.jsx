import { getProds } from "../../../service/services"
import style from './pizza.module.css'
import PizzaElement from "./PizzaElement"
import LoaderMain from "../../Loaders/Loader-main"
import { useState } from "react"
import SelectFilter from "../../SelectFilter/SelectFilter"

function Pizza() {
    let { products, loading } = getProds('pizza')
    const [prodFilter, setProdFilter] = useState('Всі')
    const [sizeFilter, setSizeFilter] = useState(22)

    return (
        <section className={style.section_wrapper}>
            <h1>Піца у Львові</h1>
            <aside>
                <ul className={style.prod_filter}>
                    <li onClick={() => setProdFilter('Всі')} className={prodFilter === 'Всі' ? style.sushi_filter_list_active_color : ''}>Всі</li>
                    <li onClick={() => setProdFilter('ТОП продажів')} className={prodFilter === 'ТОП продажів' ? style.sushi_filter_list_active_color : ''}>ТОП продажів</li>
                    <li onClick={() => setProdFilter("М'ясні")} className={prodFilter === "М'ясні" ? style.sushi_filter_list_active_color : ''}>М'ясні</li>
                    <li onClick={() => setProdFilter("Вегетаріанські")} className={prodFilter === "Вегетаріанські" ? style.sushi_filter_list_active_color : ''}>Вегетаріанські</li>
                    <li onClick={() => setProdFilter("Гострі")} className={prodFilter === "Гострі" ? style.sushi_filter_list_active_color : ''}>Гострі</li>
                </ul>
                <ul className={style.prod_filter}>
                    <li onClick={() => setSizeFilter(22)} className={prodFilter === 22 ? style.sushi_filter_list_active_color : ''}>22</li>
                    <li onClick={() => setSizeFilter('ТОП продажів')} className={prodFilter === 'ТОП продажів' ? style.sushi_filter_list_active_color : ''}>ТОП продажів</li>
                    <li onClick={() => setSizeFilter("М'ясні")} className={prodFilter === "М'ясні" ? style.sushi_filter_list_active_color : ''}>М'ясні</li>
                </ul>
                <SelectFilter />
            </aside>
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