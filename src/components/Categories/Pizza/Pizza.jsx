import { getProds } from "../../../service/services"
import style from './pizza.module.css'
import PizzaElement from "./PizzaElement"
import LoaderMain from "../../Loaders/Loader-main"
import { useState } from "react"
import SelectFilter from "../../SelectFilter/SelectFilter"
import ArticlePizza from "./ArticlePizza"

function Pizza() {
    let { products, loading } = getProds('pizza')
    const [prodFilter, setProdFilter] = useState('Всі')
    const [sizeFilter, setSizeFilter] = useState(22)
    const prodFilters = ["Всі", "ТОП продажів", "М'ясні", "Вегетаріанські", "Гострі"]
    const sizeFilters = [22, 30, 40]

    return (
        <section className={style.section_wrapper}>
            <h1>Піца у Львові</h1>

            {loading ? <LoaderMain /> :
                <>
                    <aside className={style.filters_wrapper}>
                        <div className={style.filters}>
                            <ul className={style.filter}>
                                {prodFilters.map((filter, index) =>
                                    <li className={prodFilter === filter ? style.activefilter : ''}
                                        onClick={() => setProdFilter(filter)} key={index}>{filter}</li>)}
                            </ul>

                            <ul className={style.filter_size}>
                                {sizeFilters.map((filter, index) =>
                                    <li key={index} onClick={() => setSizeFilter(filter)}
                                        className={sizeFilter === filter ? style.activefilter : ''}>{filter} см</li>)}
                            </ul>
                        </div>
                        <SelectFilter />
                    </aside>
                    <ul className={style.prod_list}>
                        {products.map(item => (
                            <PizzaElement key={item._id} item={item} style={style} sizeFilter={sizeFilter} />
                        ))}
                    </ul>
                </>
            }

            <ArticlePizza />
        </section>
    )
}

export default Pizza