import { useEffect, useState } from 'react'
import SelectFilter from '../../SelectFilter/SelectFilter'
import style from './sneks.module.css'
import SneksElement from './SneksElement'

function Sneks() {

    const [sneksData, setSneksData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        let res = await fetch('https://server-8q35.onrender.com/api/snek')
        let data = await res.json()
        setSneksData(data)
    }

    return (
        <section>
            <div className={style.sneks_main_container}>
                <h1>Фрі та снеки</h1>
                <div className={style.sneks_filter_container}>
                    <div></div>
                    <SelectFilter />
                </div>
                <div className={style.sneks_products_container}>
                    {
                        sneksData && sneksData?.map((item) => {
                            return <SneksElement key={item._id} data={item}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Sneks