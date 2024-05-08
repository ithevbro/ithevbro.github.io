import { useContext } from "react"
import SaleBanner from "../../components/SaleBanner/SaleBanner"
import style from './about.module.css'
import { GlobalOverlayState } from "../../global-state/GlobalOverlay"

function About() {

    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData

    return (
        <section>
            <SaleBanner openClose={false} />
            <div className={style.about_container}>
                <h1>ПРО НАС</h1>
                <div className={style.info_container}>
                    <div className={style.left_container}>
                        <p>Smaki-Maki – доставка суші та піци у Львові, Івано-Франківську, Дрогобичі, Трускавці</p>
                        <img src="https://smaki-maki.com/wp-content/uploads/sites/4/2023/03/dsc08115-edit-550x566.jpg" alt="" />
                        <button onClick={() => setGlobalOverlayData({ type: "res" })}>Залишити відгук</button>
                    </div>
                    <div className={style.right_container}>
                        <ul>
                            <li>
                                <h3>Чому ми найкращі?</h3>
                                <p>Смакі-макі – лідер доставки суші та піци в Західному регіоні з 2015 року. Ми активно розширюємо свою мережу, аби якомога більше українців могли насолоджуватись смачними стравами від Smaki-maki!  Ми постійно працюємо над тим, щоб наші суші, роли, піца та інші страви були на найвищому кулінарному рівні! Авторські рецепти від бренд-шефа підкорили сотні тисяч клієнтів!</p>
                            </li>
                            <li>
                                <h3>Smaki-Maki - онлайн-ресторан</h3>
                                <p>Це означає, що ми не пропонуємо фаст-фуд. Наші страви – ресторанної якості, якими ви можете насолоджуватись вдома та на роботі! У нас функціонують 9 кухонь у Львові – в якій би частині міста ви не знаходились, ми оперативно приготуємо та привеземо замовлення до 29 хвилин в зеленій зоні та до 59 хвилин в жовтій! Ми використовуємо тільки якісні свіжі продукти та зручне упакування для страв.Замовлення приймаються без вихідних!</p>
                            </li>
                            <li>
                                <h3>Партнерство</h3>
                                <p>Роки успішного досвіду дозволяють активно масштабуватись та відповідати сучасним тенденціям. Саме тому ми пропонуємо інвестиційну співпрацю у форматі франшизи. Відкрийте свій діючий успішний бізнес в будь-якому місті України чи за кордоном. Деталі:  smaki-maki.biz</p>
                            </li>
                            <li>
                                <h3>Переваги доставки суші та піци Smaki-maki</h3>
                                <p>Великі порції та широке меню на будь-який смак<br />Швидка вчасна доставка в заявлені райони міста<br />Незмінно свіжа та якісна продукція<br /> Ввічливий кваліфікований персонал<br /></p>
                            </li>
                            <li>
                                <p>Якщо Ви є постачальником товарів/послуг та маєте пропозицію щодо співпраці, просимо звертатись у відділ постачання: <b>distributor.smaki@gmail.com</b></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About