import { useState } from 'react'
import style from './selectCity.module.css'


function SelectCity({ data, selectType, setSelectData }) {

    // const cities = ['Львів', 'Зубра', 'Солонка', 'Брюховичі', 'Зимна Вода', 'Підбірці', 'Малехів', 'Муроване']

    // const [isOpen, setIsOpen] = useState(false)
    // const [selectedCity, setSelectedCity] = useState('Львів')


    // return (
    //     <div className={style.select_city_container}>
    //         <p onClick={(e) => setIsOpen(!isOpen)}>{selectedCity} <img className={isOpen ? style.select_city_image_active : style.select_city_image} src="https://static.vecteezy.com/system/resources/previews/021/190/411/original/down-arrow-outline-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="" /></p>
    //         <ul className={isOpen ? style.city_select_list_active : style.city_select_list}>
    //             {
    //                 cities.map((city) => {
    //                     return <li key={city} className={style.city_list_element} onClick={(e) => {
    //                         setIsOpen(false)
    //                         setSelectedCity(e.target.textContent)
    //                     }}>{city}{selectedCity === city && <img src='https://smaki-maki.com/wp-content/themes/smaki/img/icons/icon-select.svg' />}</li>
    //                 })
    //             }
    //         </ul>
    //     </div>
    // )

    const [isOpen, setIsOpen] = useState(false)
    const [selectedCity, setSelectedCity] = useState(data[0])

    function dataFromInput(text) {
        setSelectedCity(text)
        if (selectType === 'cities') {
            setSelectData(prevData => ({ ...prevData, city: text }))
        } else if (selectType === 'delivery') {
            setSelectData(prevData => ({ ...prevData, delivery: text }))
        } else if (selectType === 'payment') {
            setSelectData(prevData => ({ ...prevData, typePayment: text }))
        } else if (selectType === 'deliveryTime') {
            setSelectData(prevData => ({ ...prevData, deliveryTime: text }))
        } else if (selectType === 'deliverySelf') {
            setSelectData(prevData => ({ ...prevData, deliverySelf: text }))
        }else if (selectType === 'deliverySelfTime') {
            setSelectData(prevData => ({ ...prevData, deliverySelfTime: text }))
        }
    }
    return (
        <div className={style.select_city_container}>
            <p onClick={(e) => setIsOpen(!isOpen)}>{selectedCity} <img className={isOpen ? style.select_city_image_active : style.select_city_image} src="https://static.vecteezy.com/system/resources/previews/021/190/411/original/down-arrow-outline-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg" alt="" /></p>
            <ul className={isOpen ? style.city_select_list_active : style.city_select_list}>
                {
                    data.map((city) => {
                        return <li key={city} className={style.city_list_element} onClick={(e) => {
                            setIsOpen(false)
                            dataFromInput(e.target.textContent)
                        }}>{city}{selectedCity === city && <img src='https://smaki-maki.com/wp-content/themes/smaki/img/icons/icon-select.svg' />}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default SelectCity