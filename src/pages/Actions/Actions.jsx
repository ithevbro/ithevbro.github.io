import SaleBanner from "../../components/SaleBanner/SaleBanner"
import style from './actions.module.css'

function Actions() {
    return (
        <section>
            <SaleBanner openClose={false} />
            <div className={style.actions_container}>
                <h1>АКЦІЇ</h1>
                <div className={style.actions_element_left}>
                    <div><img src="https://smaki-maki.com/wp-content/uploads/sites/4/2024/04/picza-z-shynkoyu-ta-grybamy-min.png" alt="" /></div>
                    <div className={style.actions_info_left}>
                        <h3>Доставка до 29 хв або отримай подарунок</h3>
                        <p>Доставляємо до 29 хвилин (зелена зона) та 59 хвилин (жовта зона) або отримай безкоштовно: <br /> Піцу з шинкою та грибами (30 см) або Сирний рол до наступного замовлення!</p>
                        <p>* термін дії подарунка – 30 днів</p>
                        <p>* подарунок активується наступного дня або з понеділка, якщо ваше замовлення припало на вихідні дні</p>
                        <p>* пропозиція не діє 31 грудня, 8 березня та 14 лютого.</p>
                    </div>
                </div>
                <div className={style.actions_element_right}>
                    <div className={style.actions_info_right}>
                        <p><strong>Акція «2+1» діє в понеділок, вівторок, середу та четвер, окрім святкових днів. </strong><span>Замовляйте 2 піци, а 3-ю отримуйте безкоштовно!</span></p>
                        <p>* Номінал бонусної піци становить 1 грн</p>
                        <p>** Безкоштовною вважається піца з найменшою вартістю в чеку</p>
                    </div>
                    <div><img src="https://smaki-maki.com/wp-content/uploads/sites/4/2024/04/picza-z-shynkoyu-ta-grybamy-min.png" alt="" /></div>
                </div>
                <div className={style.actions_element_left}>
                    <div><img src="https://smaki-maki.com/wp-content/uploads/sites/4/2023/02/baner_31.jpg" alt="" /></div>
                    <div className={style.actions_info_left}>
                        <p><strong>Акція «3+1» діє в п’ятницю, суботу та неділю, а також у святкові дні. </strong><span>Замовляйте 3 піци, а 4-у отримуйте безкоштовно!</span></p>
                        <p>* Номінал бонусної піци становить 1 грн</p>
                        <p>** Безкоштовною вважається піца з найменшою вартістю в чеку</p>
                    </div>
                </div>
                <div className={style.actions_element_right}>
                    <div className={style.actions_info_right}>
                        <p>Святкуєш свій День народження? Отримай подарунок від Smaki-maki – одразу три піци:</p>
                        <ul className={style.list_actions}>
                            <li><strong>Гавайська 30 см</strong></li>
                            <li><strong>Маргарита 30 см</strong></li>
                            <li><strong>Піца з шинкою та грибами 30 см</strong></li>
                        </ul>
                        <p>*Щоб скористатись акцією потрібно зробити замовлення на суму від 700 грн на будь-які страви, окрім акційних позицій</p>
                        <p>*Для отримання подарунка потрібно пред’явити кур’єру документ, який засвідчує дату Вашого народження</p>
                        <p>*Термін дії  –  День народження плюс 7 днів після нього</p>
                        <p>*Пропозиція не поєднується з іншими акціями</p>
                    </div>
                    <div><img src="https://smaki-maki.com/wp-content/uploads/sites/4/2023/05/dyzajn-bez-nazvanyya-2.png" alt="" /></div>
                </div>
                <div className={style.actions_element_left}>
                    <div><img src="https://smaki-maki.com/wp-content/uploads/sites/4/2023/02/baner_samovyviz_2.jpg" alt="" /></div>
                    <div className={style.actions_info_left}>
                        <p>Даруємо <strong>10% знижки</strong> на замовлення із самовивозом*</p>
                        <p>Cумується з акційними сетами і 2+1, 3+1 на піцу</p>
                        <p>Самовивіз здійснюється за адресою:</p>
                        <ul className={style.list_actions}>
                            <li><strong>пр-т Червоної Калини, 71</strong></li>
                            <li><strong>вул. Городоцька, 214</strong></li>
                            <li><strong>вул. Широка, 11</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Actions