import { useEffect, useState } from 'react'
import SelectFilter from '../../SelectFilter/SelectFilter'
import style from './sets.module.css'
import SetsElement from './SetsElement'

function Sets() {

    const [setsData, setSetsData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        let res = await fetch('https://server-8q35.onrender.com/api/sets')
        let data = await res.json()
        setSetsData(data)
    }

    return (
        <section>
            <div className={style.sets_main_container}>
                <h1>Доставка суші сетів у Львові</h1>
                <div className={style.sets_filter_container}>
                    <div></div>
                    <SelectFilter />
                </div>
                <div className={style.sets_products_container}>
                    {
                        setsData && setsData?.map((item) => {
                           return <SetsElement key={item._id} data={item} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Sets