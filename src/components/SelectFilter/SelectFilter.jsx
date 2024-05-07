import { useState } from 'react'
import style from './selectFilter.module.css'


function SelectFilter({ choose }) {
    const [isOpenSelect, setIsOpenSelect] = useState(false)
    const [selectedElement, setSelectedElement] = useState('Від дешевих до дорогих')

    return (
        <div className={style.main_container_select}>
            <div className={style.select_container} onClick={() => setIsOpenSelect(prev => !prev)}>{selectedElement} {isOpenSelect ? <span>&#11167;</span> : <span>&#11165;</span>}</div>
            <div className={isOpenSelect ? style.option_container_open : style.option_container}>
                <div className={style.select_element}
                    onClick={() => {
                        setSelectedElement('Від дешевих до дорогих')
                        setIsOpenSelect(prev => !prev)
                        choose('Від дешевих до дорогих')
                    }}>
                    <span>Від дешевих до дорогих</span>
                    {selectedElement === 'Від дешевих до дорогих' ? < img src="https://smaki-maki.com/wp-content/themes/smaki/img/icons/icon-select.svg" alt="" /> : null}
                </div>
                <div className={style.select_element}
                    onClick={() => {
                        setSelectedElement('Від дорогих до дешевих')
                        setIsOpenSelect(prev => !prev)
                        choose('Від дорогих до дешевих')
                    }}>
                    <span>Від дорогих до дешевих</span>
                    {selectedElement === 'Від дорогих до дешевих' ? < img src="https://smaki-maki.com/wp-content/themes/smaki/img/icons/icon-select.svg" alt="" /> : null}
                </div>
                <div className={style.select_element}
                    onClick={() => {
                        setSelectedElement('За популярністю')
                        setIsOpenSelect(prev => !prev)
                        choose('За популярністю')
                    }}>
                    <span>За популярністю</span>
                    {selectedElement === 'За популярністю' ? < img src="https://smaki-maki.com/wp-content/themes/smaki/img/icons/icon-select.svg" alt="" /> : null}
                </div>
            </div>
        </div>
    )
}

export default SelectFilter