import SelectFilter from '../../SelectFilter/SelectFilter'
import style from './sets.module.css'
import SetsElement from './SetsElement'
import { getProds } from '../../../service/services'
import LoaderMain from '../../Loaders/Loader-main'

function Sets() {
    let { products, loading } = getProds('sets')


    return (
        <section>
            <div className={style.sets_main_container}>
                <h1>Доставка суші сетів у Львові</h1>
                <div className={style.sets_filter_container}>
                    <div></div>
                    <SelectFilter />
                </div>

                {
                    loading ? <LoaderMain /> :
                        <div className={style.sets_products_container}>
                            {
                                products.map((item) => {
                                    return <SetsElement key={item._id} data={item} />
                                })
                            }
                        </div>
                }

            </div>
        </section>
    )
}

export default Sets