import style from './sushi.module.css'
import SelectFilter from '../../SelectFilter/SelectFilter'
import { useState } from 'react'
import SushiElement from './SushiElement'
import { getProds } from '../../../service/services'
import LoaderMain from '../../Loaders/Loader-main'
import ArticleSushi1 from './Article1'
import ArticleSushi2 from './Article2'
import { useLocation } from 'react-router-dom'

function Sushi() {

    let { products, loading } = getProds('sushi')
    const [prodFilter, setProdFilter] = useState('Всі')
    const sushiFilters = ['Всі', 'Суперціна', 'Суші-бургери', 'Сети', 'ТОП продажів', 'Філадельфії', 'Вершкові', 'Запечені', 'Теплі', 'Дракони']
    let url = useLocation().pathname

    return (
        <section className={style.prod_main_container}>
            <div className={style.prod_wrapper}>
                <h1>Суші у Львові</h1>
                <h5>Роли</h5>
                <aside className={style.prod_filter_container}>
                    <ul className={style.prod_filter_list}>
                        {
                            sushiFilters.map((filter, index) =>
                                <li
                                    key={index}
                                    onClick={() => setProdFilter(filter)}
                                    className={prodFilter === filter ? style.prod_filter_list_active_color : ''}
                                >
                                    {filter}
                                </li>
                            )
                        }
                    </ul>
                    <SelectFilter />
                </aside>
                {
                    loading ? <LoaderMain /> :
                        <ul className={style.prod_container}>
                            {
                                products.map((item) => {
                                    return <SushiElement key={item._id} data={item} />
                                })
                            }
                        </ul>
                }
            </div>

            {url === '/' ? <ArticleSushi1 /> : <ArticleSushi2 />}
        </section>
    )
}

export default Sushi