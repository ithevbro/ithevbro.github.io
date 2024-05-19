import { useContext } from 'react'
import style from './freeSouses.module.css'
import { SouseContext } from './GlobalStateSouse';

function FreeSouses() {

    const souseData = useContext(SouseContext)

    localStorage.setItem('souseInStorage', JSON.stringify(souseData.souseData))

  
    function plus(item) {
        if (item === 'soy') {
            souseData.setSouseData({
                type: 'edit',
                elem: { ...souseData.souseData, [item]: souseData.souseData[item] + 1, totalSoy: souseData.souseData.totalSoy + 12 }
            })
        } else if (souseData.souseData['usual'] + souseData.souseData['study'] >= 4 && item != 'soy') {
            souseData.setSouseData({
                type: 'edit',
                elem: { ...souseData.souseData, [item]: souseData.souseData[item] + 1, totalSet: souseData.souseData.totalSet + 15 }
            })
        } else {
            souseData.setSouseData({
                type: 'edit',
                elem: { ...souseData.souseData, [item]: souseData.souseData[item] + 1 }
            })
        }

    }

    function minus(item) {
        if (souseData.souseData[item] === 0) return
        if (item === 'soy') {
            souseData.setSouseData({
                type: 'edit',
                elem: { ...souseData.souseData, [item]: souseData.souseData[item] - 1, totalSoy: souseData.souseData.totalSoy - 12 }
            })
        } else if (souseData.souseData['usual'] + souseData.souseData['study'] > 4 && item != 'soy') {
            souseData.setSouseData({
                type: 'edit',
                elem: { ...souseData.souseData, [item]: souseData.souseData[item] - 1, totalSet: souseData.souseData.totalSet - 15 }
            })
        } else {
            souseData.setSouseData({
                type: 'edit',
                elem: { ...souseData.souseData, [item]: souseData.souseData[item] - 1 }
            })
        }
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
                        <button className={style.basket_buy_button} onClick={(e) => {
                            e.preventDefault()
                            minus('usual')
                        }}>
                            -
                        </button>
                        <span className={style.item_quantity}>{souseData.souseData.usual}</span>
                        <button className={style.basket_buy_button} onClick={(e) => {
                            e.preventDefault()
                            plus('usual')
                        }}>
                            +
                        </button>
                    </div>
                    <div className={style.btn_cont}>
                        <button className={style.basket_buy_button} onClick={(e) => {
                            e.preventDefault()
                            minus('study')
                        }}>
                            -
                        </button>
                        <span className={style.item_quantity}>{souseData.souseData.study}</span>
                        <button className={style.basket_buy_button} onClick={(e) => {
                            e.preventDefault()
                            plus('study')
                        }}>
                            +
                        </button>
                    </div>
                    <div className={style.prive_quant}>{souseData.souseData.totalSet <= 0 ? 'Безкоштовно' : souseData.souseData.totalSet + ' грн'}</div>
                </div>
            </div>
            <div className={style.basket_element_in_list}>
                <div className={style.basket_element_in_list_image}><img src='https://smaki-maki.com/wp-content/themes/smaki/img/soy-sauce.jpg' alt="" /></div>
                <div className={style.basket_element_info}>
                    <div className={style.basket_element_title}>Додатковий соєвий соус (100мл)</div>
                </div>
                <div className={style.bottom_info}>
                    <div className={style.btn_cont}>
                        <button className={style.basket_buy_button} onClick={(e) => {
                            e.preventDefault()
                            minus('soy')
                        }}>
                            -
                        </button>
                        <span className={style.item_quantity}>{souseData.souseData.soy}</span>
                        <button className={style.basket_buy_button} onClick={(e) => {
                            e.preventDefault()
                            plus('soy')
                        }}>
                            +
                        </button>
                    </div>
                    <div className={style.prive_quant}>{souseData.souseData.totalSoy <= 0 ? 'Безкоштовно' : souseData.souseData.totalSoy + ' грн'}</div>
                </div>
            </div>
        </div>
    )
}

export default FreeSouses