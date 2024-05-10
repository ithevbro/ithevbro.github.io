import { useContext, useState, useEffect } from 'react'
import style from './freeSouses.module.css'
import { SouseContext } from './GlobalStateSouse';


function FreeSouses() {

    const souseData = useContext(SouseContext)

    function plus(item) {

        souseData.setSouseData({
            type: 'edit',
            elem: { ...souseData.souseData, [item]: souseData.souseData[item] + 1 }
        })
    }

    function minus(item) {
        if (souseData.souseData[item] === 0) return
        souseData.setSouseData({
            type: 'edit',
            elem: { ...souseData.souseData, [item]: souseData.souseData[item] - 1 }
        })
    }

    return (
        <div >
            <div className={style.basket_element_in_list}>
                <div className={style.basket_element_in_list_image}><img src='https://smaki-maki.com/wp-content/themes/smaki/img/set.jpg' alt="" /></div>
                <div className={style.basket_element_info}>
                    <div className={style.basket_element_title}>Набір звичайний</div>
                    <div className={style.basket_element_title}>Набір навчальний</div>
                </div>
                <div className={style.bottom_info}>
                    <div className={style.btn_cont}>
                        <button className={style.plus_minus_btn} id={style.btn} onClick={(e) => {
                            e.preventDefault()
                            plus('usual')
                        }}>
                            +
                        </button>
                        <span className={style.item_quantity}>{souseData.souseData.usual}</span>
                        <button id={style.btn} onClick={(e) => {
                            e.preventDefault()
                            minus('usual')
                        }}>
                            -
                        </button>
                    </div>
                    <div className={style.btn_cont}>
                        <button className={style.plus_minus_btn} id={style.btn} onClick={(e) => {
                            e.preventDefault()
                            plus('study')
                        }}>
                            +
                        </button>
                        <span className={style.item_quantity}>{souseData.souseData.study}</span>
                        <button id={style.btn} onClick={(e) => {
                            e.preventDefault()
                            minus('study')
                        }}>
                            -
                        </button>
                    </div>
                    <div className={style.prive_quant}><span> грн</span></div>
                </div>
            </div>
            <div className={style.basket_element_in_list}>
                <div className={style.basket_element_in_list_image}><img src='https://smaki-maki.com/wp-content/themes/smaki/img/soy-sauce.jpg' alt="" /></div>
                <div className={style.basket_element_info}>
                    <div className={style.basket_element_title}>Додатковий соєвий соус (100мл)</div>
                </div>
                <div className={style.bottom_info}>
                    <div className={style.btn_cont}>
                        <button className={style.plus_minus_btn} id={style.btn} onClick={(e) => {
                            e.preventDefault()
                            plus('soy')
                        }}>
                            +
                        </button>
                        <span className={style.item_quantity}>{souseData.souseData.soy}</span>
                        <button id={style.btn} onClick={(e) => {
                            e.preventDefault()
                            minus('soy')
                        }}>
                            -
                        </button>
                    </div>
                    <div className={style.prive_quant}><span> грн</span></div>
                </div>
            </div>
        </div>
    )
}

export default FreeSouses