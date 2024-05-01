import style from './headeroverlay.module.css'
import { useContext } from 'react'
import { GlobalOverlayState } from '../../../global-state/GlobalOverlay'
import { NavLink } from 'react-router-dom'

function HeaderOverlay({ handleOverlaySwitch, overlaySwitch }) {

    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData

    return (
        <div className={`${style.header_overlay} ${overlaySwitch ? style.header_overlay_hide : ''}`}>
            <div className={style.container}>
                <h2>Меню</h2>
                <nav className={style.full_nav}>
                    <ul className={style.icon_list}>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? style.active_navlink : "")} to={'/pizza'} onClick={() => handleOverlaySwitch('close')}><img src="/nav-icons/pizza.svg" alt="" /> <span>Піца</span></NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? style.active_navlink : "")} to={'/sushi'} onClick={() => handleOverlaySwitch('close')}><img src="/nav-icons/sushi.svg" alt="" /> <span>Суші</span></NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? style.active_navlink : "")} to={'/sets'} onClick={() => handleOverlaySwitch('close')}><img src="/nav-icons/sets.svg" alt="" /> <span>Сети</span></NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? style.active_navlink : "")} to={'/sneks'} onClick={() => handleOverlaySwitch('close')}><img src="/nav-icons/snaks.svg" alt="" /><span>Фрі та снеки</span></NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? style.active_navlink : "")} to={'/salats'} onClick={() => handleOverlaySwitch('close')}><img src="/nav-icons/boul.svg" alt="" /> <span>Боули</span></NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? style.active_navlink : "")} to={'/drinks'} onClick={() => handleOverlaySwitch('close')}><img src="/nav-icons/drinks.svg" alt="" /> <span>Напої</span></NavLink>
                        </li>
                        <li>
                            <a href="/" onClick={(e) => {
                                e.preventDefault()
                                setGlobalOverlayData({ type: 'basket' })
                            }}>
                                <img src="/nav-icons/cart.svg" alt="" /> <span>Кошик</span></a>
                        </li>
                    </ul>

                    <div className={style.right_nav}>
                        <div className={style.login_area}>
                            <img src="/nav-icons/icon-menu-user-big.svg" alt="" />
                            <div className={style.login_area_buttons}>
                                <button onClick={() => setGlobalOverlayData({ type: 'login' })}>УВІЙТИ</button>
                                <button onClick={() => setGlobalOverlayData({ type: 'reg' })}>ЗАРЕЄСТРУВАТИСЬ</button>
                            </div>
                        </div>
                        <ul>
                            <li><NavLink to={'/actions'} onClick={() => handleOverlaySwitch('close')}>Акції</NavLink></li>
                            <li><NavLink to={'/about'} onClick={() => handleOverlaySwitch('close')}>Про нас</NavLink></li>
                            <li><NavLink to={'/delivery'} onClick={() => handleOverlaySwitch('close')}>Доставка</NavLink></li>
                            <li><a href="https://smaki-maki.biz/" target='_blank'>Франчайзинг</a></li>
                            <li><NavLink to={'/vacancies'} onClick={() => handleOverlaySwitch('close')}>Вакансії</NavLink></li>
                            <li><NavLink>Залишити відгук</NavLink></li>
                        </ul>
                    </div>
                </nav>

                <footer className={style.footer_wrapper}>
                    <div className={style.footer_left}>
                        <img src="/nav-icons/icon-menu-scooter.svg" alt="" />
                        <div >
                            <div>
                                <b>Безкоштовна Доставка</b>
                            </div>
                            <div>до 29 хв</div>
                        </div>
                    </div>

                    <ul className={style.footer_right}>
                        <li>
                            <a href="tel:0800204040">
                                <img src="/nav-icons/phone.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/smaki.makii/">
                                <svg version="1.1" width="9" height="16" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg"><g><path d="m2.8384 8.0064h-1.8515v-1.5942h1.8444l0.12889-2.9126c0.06251-1.4202 1.2232-2.5197 2.6499-2.5197h0.03609l1.7477 0.02304-0.0348 1.5443h-1.3791c-0.75335 0-1.3656 0.60864-1.3656 1.3568v2.5082h2.7228l-0.12309 1.5942h-2.5997v7.0138h-1.7761zm2.7621 0.97984h2.5268l0.27518-3.5539h-2.802v-1.5283c0-0.208 0.17013-0.37696 0.37957-0.37696h2.3438l0.07927-3.4906-2.7434-0.03648h-0.05027c-1.9565 0-3.5489 1.5091-3.6353 3.456l-0.087 1.9763h-1.8869v3.5539h1.8515v7.0138h3.7487z" fill="#fff"></path></g></svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/smaki.maki/">
                                <svg width="16" height="16" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m10.908 7.97c0 1.6213-1.3191 2.9411-2.9411 2.9411-1.6213 0-2.9404-1.3198-2.9404-2.9411 0-1.6213 1.3191-2.9404 2.9404-2.9404 1.622 0 2.9411 1.3191 2.9411 2.9404zm1.0689 1e-5c0-2.211-1.7984-4.01-4.01-4.01-2.211 0-4.01 1.799-4.01 4.01 0 2.2116 1.799 4.01 4.01 4.01 2.2116 0 4.01-1.7984 4.01-4.01z" fill="#fff"></path></g><g><path d="m13.374 1.0669c0.8576 0 1.5558 0.6976 1.5558 1.5552v10.756c0 0.8576-0.69824 1.5552-1.5558 1.5552h-10.755c-0.8576 0-1.5558-0.6976-1.5558-1.5552v-10.756c0-0.8576 0.69824-1.5552 1.5558-1.5552zm2.6227 12.311v-10.756c0-1.4458-1.177-2.6221-2.6227-2.6221h-10.755c-1.4458 0-2.6221 1.1763-2.6221 2.6221v10.756c0 1.4458 1.1763 2.6221 2.6221 2.6221h10.755c1.4458 0 2.6227-1.1763 2.6227-2.6221z" fill="#fff"></path></g><g><path d="m11.34 3.5866c0-0.57417 0.46546-1.0396 1.0396-1.0396s1.0396 0.46546 1.0396 1.0396-0.46546 1.0396-1.0396 1.0396-1.0396-0.46546-1.0396-1.0396z" fill="#fff"></path></g></g></svg>
                            </a>
                        </li>
                    </ul>
                </footer>

            </div>
        </div>
    )
}

export default HeaderOverlay