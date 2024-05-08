import SelectFilter from '../../SelectFilter/SelectFilter'
import style from './sets.module.css'
import SetsElement from './SetsElement'
import { getProds } from '../../../service/services'
import LoaderMain from '../../Loaders/Loader-main'

function Sets() {
    let { products, loading } = getProds('sets')

    return (
        <section>
            <div className={style.prod_wrapper}>
                <h1>Доставка суші сетів у Львові</h1>
                <ul className={style.prod_filter_container}>
                    <div></div>
                    <SelectFilter />
                </ul>
                {
                    loading ? <LoaderMain /> :
                        <ul className={style.prod_container}>
                            {
                                products.map((item) => {
                                    return <SetsElement key={item._id} data={item} />
                                })
                            }
                        </ul>
                }

            </div>
        </section>
    )
}

export default Sets