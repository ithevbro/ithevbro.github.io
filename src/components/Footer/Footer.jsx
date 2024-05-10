import style from './footer.module.css'
import { NavLink } from 'react-router-dom'
import BasicInput from '../Inputs/BasicInput'
import { GlobalOverlayState } from '../../global-state/GlobalOverlay'
import { useContext } from 'react'

function Footer() {

    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData

    return (
        <footer className={style.footer_wrapper}>
            <div className={style.footer_top}>
                <div className={style.footer_left_wrapper}>
                    <div className={style.left_top}>
                        <ul className={style.footer_left}>
                            <li className={style.dostavka}>
                                <img src="/nav-icons/icon-scooter-dark.svg" alt="" />
                                <div >
                                    <div>
                                        <b>Безкоштовна Доставка</b>
                                    </div>
                                    <div>до 29 хв</div>
                                </div>
                            </li>
                            <li className={style.phone}>
                                <img src="/nav-icons/icon-phone-24-dark.svg" alt=""></img>
                                <a href="tel:0800204040">0800 20 40 40</a>
                            </li>
                            <li><img src="/nav-icons/visamaster.png" alt="" /></li>
                        </ul>
                        <nav>
                            <ul className={style.page_nav}>
                                <li><NavLink to={'/actions'}>Акції</NavLink></li>
                                <li><NavLink to={'/about'} >Про нас</NavLink></li>
                                <li><NavLink to={'/delivery'} >Доставка</NavLink></li>
                                <li><a href="https://smaki-maki.biz/" target='_blank'>Франчайзинг</a></li>
                                <li><NavLink to={'/vacancies'}>Вакансії</NavLink></li>
                                <li>
                                    <a onClick={(e) => {
                                        e.preventDefault()
                                        setGlobalOverlayData({ type: 'res' })
                                    }}>Залишити відгук</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={style.apps}>
                        <h3> Завантажуй додаток:</h3>
                        <div className={style.appload_links}>
                            <a href="https://apps.apple.com/us/app/smaki-maki/id1543396014">
                                <img src="/nav-icons/app-store-download.svg" alt="download app store" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.smakiMaki.app">
                                <img src="/nav-icons/google-play-download.svg" alt="download play market" />
                            </a>
                        </div>

                    </div>
                </div>

                <div className={style.footer_right}>
                    <h2>Підпишіться на розсилку</h2>
                    <p>ТА ОТРИМУЙТЕ НОВИНИ ПРО ЗНИЖКИ ТА AКЦІЇ!</p>
                    <form>
                        <BasicInput placeholder={'Вкажіть Вашу ел. скриньку'} inputName={'subscribe'} inputType={'email'} />
                        <button>ВІДПРАВИТИ</button>
                    </form>
                </div>
            </div>

            <ul className={style.footer_bootom}>
                <li>© 2024 – 2024 «Topolna-Lviv»</li>
                <li><a href="https://smaki-maki.com/polityka-vykorystannya-cookies/">Політика використання cookies</a></li>
                <li><a href="https://smaki-maki.com/dogovir-publichnoyi-oferty/">Договір публічної оферти</a></li>
                <li><a href="https://smaki-maki.com/karta-sajtu/">Карта сайту</a></li>
                <li><a href="https://smaki-maki.com/karta-sajtu/">Розробка сайтів «Topolna-Team»</a></li>
            </ul>
        </footer>
    )
}

export default Footer