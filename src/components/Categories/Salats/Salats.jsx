import style from './salat.module.css'
import SalatElement from './SalatElement'
import SelectFilter from '../../SelectFilter/SelectFilter'
import LoaderMain from '../../Loaders/Loader-main'
import { getProds } from '../../../service/services'
import ArticleSalats from './Article'

function Salats() {
    let { products, loading } = getProds('salat')

    return (
        <section className={style.section_wrapper}>
            <h1>Доставка боулів у Львові</h1>


            {loading ? <LoaderMain /> :
                <>
                    <aside className={style.filters_wrapper}>
                        <SelectFilter />
                    </aside>
                    <ul className={style.prod_list}>
                        {products.map(item => (
                            <SalatElement key={item._id} item={item} style={style} />
                        ))}
                    </ul>
                </>
            }
            <ArticleSalats />
        </section>
    )
}

export default Salats

