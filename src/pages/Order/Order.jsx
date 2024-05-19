import style from './order.module.css'
import BasicInput from '../../components/Inputs/BasicInput'
import Phone from '../../components/Inputs/Phone'
import { useContext, useState } from 'react'
import SelectCity from '../../components/selectCity/SelectCity'
import OrderBasket from '../../components/Cart/OrderBasket'
import CalendarOrder from '../../components/Inputs/CalendarOrder'
import { BasketContext } from '../../components/Cart/GlobalStateBasket'
import { SouseContext } from '../../components/FreeSouses/GlobalStateSouse'

function Order() {

    const dataCart = useContext(BasketContext)
    const souseData = useContext(SouseContext)

    const [check, setCheck] = useState({
        cur: true,
        dos: false
    })

    function checkGroup(data) {
        data === 'curier' ? setCheck({ cur: true, dos: false }) : setCheck({ cur: false, dos: true })
    }

    const [selectData, setSelectData] = useState({ city: 'Львів', delivery: 'До 29 хвилин', typePayment: 'Готівка', deliveryTime: '10:30', deliverySelf: 'Як найшвидше', deliverySelfStreet: 'Червоної Калини', deliverySelfTime: '10:30' })
    const [checkBox, setCheckBox] = useState(false)


    function sum() {
        let sum = 0

        for (let i = 0; i < dataCart.cartData.length; i++) {
            sum += dataCart.cartData[i].price * dataCart.cartData[i].q
        }

        if (checkSushi()) {
            sum += souseData.souseData.totalSoy
            sum += souseData.souseData.totalSet
        }
        sum += 45
        if (sum === 45) return 0
        return sum
    }

    function checkSushi() {
        let res = false
        for (let i = 0; i < dataCart.cartData.length; i++) {
            if (dataCart.cartData[i].productType === 'sushi')
                res = true
        }
        return res
    }

    return (
        <div className={style.order_main_container}>
            <h1>Оформити замовлення</h1>
            <p className={style.order_check}>Перевірте дані ще раз</p>
            <form className={style.order_form}>
                <div className={style.order_left_container}>
                    <h5>Персональні дані</h5>
                    <div className={style.row_inputs_container}>
                        <BasicInput placeholder="І'мя *" inputName='orderUserName' inputType='text' />
                        <div className={style.phone_number_order}><Phone placeholder={'Телефон *'} id={'orderPhoneNumber'} /></div>
                        <BasicInput placeholder={'Ел. скринька'} inputName={'orderEmail'} inputType={'email'} />
                    </div>
                    <div className={style.radio_buttons_container}>
                        <div className={style.radio_element} onClick={(e) => checkGroup("curier")}>
                            <span className={check.cur ? style.radio_circle_active : style.radio_circle}></span>
                            <label htmlFor="curier">Кур'єр</label>
                            <input type="radio" id='curier' name='dostavka' />
                        </div>
                        <div className={style.radio_element} onClick={(e) => checkGroup('dostavka')}>
                            <span className={check.dos ? style.radio_circle_active : style.radio_circle}></span>
                            <label htmlFor="pickUp">Самовивіз</label>
                            <input type="radio" id='pickUp' name='dostavka' />
                        </div>
                    </div>
                    {check.cur &&
                        <div>
                            <div className={style.row_inputs_container}>
                                <SelectCity data={['Львів', 'Зубра', 'Солонка', 'Брюховичі', 'Зимна Вода', 'Підбірці', 'Малехів', 'Муроване']} selectType={'cities'} setSelectData={setSelectData} />
                                <BasicInput placeholder='Вулиця *' inputName='orderStreet' inputType='text' />
                                <BasicInput placeholder='Будинок *' inputName='orderHouse' inputType='text' />
                            </div>
                            <div className={style.row_inputs_container}>
                                <BasicInput placeholder='Зелена зона' inputName='orderZone' inputType='text' />
                                <BasicInput placeholder='Квартира' inputName='orderFlat' inputType='text' />
                                <BasicInput placeholder="Під'їзд" inputName='orderEntrance' inputType='text' />
                            </div>
                            <div className={style.row_inputs_container}>
                                <BasicInput placeholder='Поверх' inputName='orderFloor' inputType='text' />
                                <div className={style.komentar}><BasicInput placeholder='Коментар' inputName='orderComment' inputType='text' /></div>
                            </div>
                        </div>}
                    {check.dos &&
                        <div>
                            <div className={style.row_inputs_container}>
                                <SelectCity data={['Львів', 'Зубра', 'Солонка', 'Брюховичі', 'Зимна Вода', 'Підбірці', 'Малехів', 'Муроване']} setSelectData={setSelectData} selectType={'cities'} />
                                <div style={{ width: '450px' }}><BasicInput placeholder='Коментар' inputName='orderComment' inputType='text' /></div>
                            </div>
                        </div>
                    }
                    <h5>Деталі доставки</h5>
                    {check.cur &&
                        <div>
                            <div className={style.delivery_details}>
                                <SelectCity data={['До 29 хвилин', 'Попереднє замовлення']} setSelectData={setSelectData} selectType={'delivery'} />
                                <SelectCity data={['Готівка', 'Термінал', 'Оплата онлайн']} setSelectData={setSelectData} selectType={'payment'} />
                                {selectData.typePayment === 'Готівка' && <BasicInput placeholder='Підготувати решту з' inputName='orderChange' inputType='text' />}
                            </div>
                            {
                                selectData.delivery === 'Попереднє замовлення' &&
                                <div className={style.previouse_order}>
                                    <div><CalendarOrder /></div>
                                    <SelectCity data={['10:30', '11:30', '12:30', '13:30', '14:30', '15:30', '16:30', '17:30']} setSelectData={setSelectData} selectType={'deliveryTime'} />
                                </div>
                            }
                        </div>
                    }
                    {check.dos &&
                        <div>
                            <div className={style.delivery_details}>
                                <SelectCity data={['Як найшвидше', 'Попереднє замовлення']} setSelectData={setSelectData} selectType={'deliverySelf'} />
                                <SelectCity data={['Червоної Калини', 'Городоцька', 'Широка']} setSelectData={setSelectData} selectType={'deliverySelfStreet'} />
                                <SelectCity data={['Готівка', 'Термінал', 'Оплата онлайн']} setSelectData={setSelectData} selectType={'payment'} />
                            </div>
                            <div className={style.change_payment}>
                                {selectData.typePayment === 'Готівка' && <BasicInput placeholder='Підготувати решту з' inputName='orderChange' inputType='text' />}
                            </div>
                            {
                                selectData.deliverySelf === 'Попереднє замовлення' &&
                                <div className={style.previouse_order}>
                                    <div><Calendar /></div>
                                    <SelectCity data={['10:30', '11:30', '12:30', '13:30', '14:30', '15:30', '16:30', '17:30']} setSelectData={setSelectData} selectType={'deliverySelfTime'} />
                                </div>
                            }
                        </div>
                    }
                    <div className={style.row_inputs_container}>
                        <label className={style.checkbox_container}>Автоматична реєстрація
                            <input type="checkbox" checked={checkBox} onChange={(e) => setCheckBox(e.target.checked)} />
                            <span className={style.check_mark}><img className={checkBox ? style.active_image : style.none_active_image} src="https://smaki-maki.com/wp-content/themes/smaki/img/icons/icon-select.svg" alt="" /></span>
                        </label>
                    </div>
                    {checkBox ?
                        <div className={style.row_inputs_container}>
                            <BasicInput placeholder='Пароль *' inputName='orderPassword' inputType='password' />
                            <BasicInput placeholder='Повторити пароль *' inputName='orderRepeatPassword' inputType='password' />
                        </div> : null
                    }
                    <div>
                        <img src="https://i.imgur.com/GXvgzub.png" alt="" />
                    </div>
                </div>
                <div className={style.order_right_container}>
                    <h1 style={{ textAlign: 'start' }}>Ваше замовлення</h1>
                    <OrderBasket />
                    <div className={style.use_bonuses}>
                        Використати накопичені бонусні гривні на оплату наступних замовлень можна лише через <a href="">додаток</a>
                    </div>
                    {sum() > 0 ? <button className={style.btn_zamovyty}>Замовити</button> : <button className={style.btn_zamovyty_disabled} disabled>Замовити</button>}
                </div>
            </form>
        </div>
    )
}

export default Order