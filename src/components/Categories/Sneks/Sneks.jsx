import { useEffect, useState } from 'react'
import SelectFilter from '../../SelectFilter/SelectFilter'
import style from './sneks.module.css'
import SneksElement from './SneksElement'
import { getProds } from '../../../service/services'
import LoaderMain from '../../Loaders/Loader-main'

function Sneks() {
    let { products, loading } = getProds('snek')
    const [sneksData, setSneksData] = useState([])

    return (
        <section>
            <div className={style.sneks_main_container}>
                <h1>Фрі та снеки</h1>
                <div className={style.sneks_filter_container}>
                    <div></div>
                    <SelectFilter />
                </div>
                {
                    loading ? <LoaderMain /> :
                        <div className={style.sneks_products_container}>
                            {
                                products.map((item) => {
                                    return <SneksElement key={item._id} data={item} />
                                })
                            }
                        </div>
                }
            </div>
        </section>
    )
}

export default Sneks