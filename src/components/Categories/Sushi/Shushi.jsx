import style from './sushi.module.css'
import SelectFilter from '../../SelectFilter/SelectFilter'
import { useEffect, useState } from 'react'
import SushiElement from './SushiElement'
import { getProds } from '../../../service/services'
import LoaderMain from '../../Loaders/Loader-main'

function Sushi() {
    let { products, loading } = getProds('sushi')
    const [selectedSushiFilter, setSelectedSushiFilter] = useState('Всі')
    const [dataSushi, setDataSushi] = useState([])


    return (
        <section>
            <div className={style.sushi_main_container}>
                <h1>Суші у Львові</h1>
                <h5>Роли</h5>
                <div className={style.sushi_filter_container}>
                    <ul className={style.sushi_filter_list}>
                        <li onClick={() => setSelectedSushiFilter('Всі')} className={selectedSushiFilter === 'Всі' ? style.sushi_filter_list_active_color : ''}>Всі</li>
                        <li onClick={() => setSelectedSushiFilter('Суперціна')} className={selectedSushiFilter === 'Суперціна' ? style.sushi_filter_list_active_color : ''}>Суперціна</li>
                        <li onClick={() => setSelectedSushiFilter('Сети')} className={selectedSushiFilter === 'Сети' ? style.sushi_filter_list_active_color : ''}>Сети</li>
                        <li onClick={() => setSelectedSushiFilter('ТОП продажів')} className={selectedSushiFilter === 'ТОП продажів' ? style.sushi_filter_list_active_color : ''}>ТОП продажів</li>
                        <li onClick={() => setSelectedSushiFilter('Філадельфії')} className={selectedSushiFilter === 'Філадельфії' ? style.sushi_filter_list_active_color : ''}>Філадельфії</li>
                        <li onClick={() => setSelectedSushiFilter('Вершкові')} className={selectedSushiFilter === 'Вершкові' ? style.sushi_filter_list_active_color : ''}>Вершкові</li>
                        <li onClick={() => setSelectedSushiFilter('Запечені')} className={selectedSushiFilter === 'Запечені' ? style.sushi_filter_list_active_color : ''}>Запечені</li>
                        <li onClick={() => setSelectedSushiFilter('Теплі')} className={selectedSushiFilter === 'Теплі' ? style.sushi_filter_list_active_color : ''}>Теплі</li>
                        <li onClick={() => setSelectedSushiFilter('Дракони')} className={selectedSushiFilter === 'Дракони' ? style.sushi_filter_list_active_color : ''}>Дракони</li>
                    </ul>
                    <SelectFilter />
                </div>
                {
                    loading ? <LoaderMain /> :
                        <div className={style.sushi_products_container}>
                            {
                                products.map((item) => {
                                    return <SushiElement key={item._id} data={item} />
                                })
                            }
                        </div>
                }
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro, provident ab distinctio magni exercitationem sit quasi non suscipit sunt placeat totam consequatur accusamus sapiente quidem vero explicabo fuga assumenda!
                    Quasi odio modi repudiandae dolorum eveniet iure quas cupiditate recusandae consequatur odit quam excepturi deserunt, quos, natus ratione reprehenderit, laboriosam possimus sit officia assumenda fugiat libero? Eius ipsam maxime aspernatur.
                    Corporis mollitia cupiditate tempore commodi doloribus? Nemo non hic modi qui nihil! Repudiandae architecto eos delectus a suscipit vitae fugiat sit odit. Autem aliquam molestiae voluptatum assumenda accusamus, fugit labore!
                    Iure magnam neque molestiae quis, aliquid cum voluptate accusantium molestias ratione rerum possimus impedit? Eaque tempora enim dolorem voluptatem consectetur quibusdam porro itaque deleniti, quas rem deserunt impedit, aliquid culpa?
                    Eligendi nam laborum placeat eius earum non excepturi doloremque quod consequatur delectus ab dignissimos dolorem fugiat error aliquid repellat, rerum reprehenderit nihil a voluptatum. Cumque inventore accusamus nemo velit tempora.
                    Error, laudantium, quisquam iure id quasi magnam cumque molestiae odio nostrum incidunt delectus ex optio consequatur expedita iusto quod exercitationem dignissimos libero voluptate ut repudiandae. A nam mollitia ab non!
                    Quaerat, fuga dolor. Culpa qui commodi distinctio, in aperiam rem reprehenderit illum nam cumque doloremque tempora hic, fugit quod tenetur dolorem eos delectus optio molestiae perspiciatis impedit et nostrum assumenda?</div>
            </div>

        </section>
    )
}

export default Sushi