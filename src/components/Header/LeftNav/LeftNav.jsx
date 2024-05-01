import style from './left-nav.module.css'
import { useContext } from 'react'
import { GlobalOverlayState } from '../../../global-state/GlobalOverlay'
import { NavLink } from 'react-router-dom'

function LeftNav({ handleOverlaySwitch, overlaySwitch, hide }) {

    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData

    return (
        <div className={`${style.nav_wrapper} ${overlaySwitch || hide ? style.nav_wrapper_hide : ''}`}>
            <button onClick={() => handleOverlaySwitch('open')}><img src="/nav-icons/menu-icon.svg" alt="" /></button>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/pizza" className={({ isActive }) => (isActive ? style.active_navlink : "")}><img src="/nav-icons/pizza.svg" alt="" /><div><span>Піца</span></div></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? style.active_navlink : "")} to={'/sushi'} ><img src="/nav-icons/sushi.svg" alt="" /> <div><span>Суші</span></div></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? style.active_navlink : "")} to={'/sets'} ><img src="/nav-icons/sets.svg" alt="" /> <div><span>Сети</span></div></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? style.active_navlink : "")} to={'/sneks'} ><img src="/nav-icons/snaks.svg" alt="" /> <div><span>Фрі та снеки</span></div></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? style.active_navlink : "")} to={'/salats'} ><img src="/nav-icons/boul.svg" alt="" /> <div><span>Боули</span></div></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? style.active_navlink : "")} to={'/drinks'} ><img src="/nav-icons/drinks.svg" alt="" /> <div><span>Напої</span></div></NavLink>
                    </li>
                </ul>
            </nav>
            <ul className={style.bottom_icons}>
                <li>
                    <a onClick={() => { setGlobalOverlayData({ type: 'login' }) }}>
                        <svg version="1.1" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g><g><path fill="#f2f2f2" d="m9.1351 1.2595c1.9461 0 3.5384 1.6004 3.5384 3.5564 0 1.956-1.5923 3.5564-3.5384 3.5564-1.9461 0-3.5384-1.6004-3.5384-3.5564s1.5922-3.5564 3.5384-3.5564zm0 8.3872c2.6538 0 4.8063-2.1635 4.8063-4.8308 0-2.6673-2.1525-4.816-4.8063-4.816-2.6538 0-4.8063 2.1635-4.8063 4.816s2.1525 4.8308 4.8063 4.8308z"></path></g><g><path fill="#f2f2f2" d="m6.0443 11.719h5.9112c2.4236 0 4.4187 1.8079 4.729 4.1491h-15.369c0.31033-2.3264 2.3054-4.1491 4.729-4.1491zm-5.4088 5.4236h16.729c0.35467 0 0.63545-0.28156 0.63545-0.63718 0-3.3341-2.7044-6.0607-6.0443-6.0607h-5.9112c-3.3251 0-6.0443 2.7117-6.0443 6.0607 0 0.35562 0.28078 0.63718 0.63545 0.63718z"></path></g></g></svg>
                    </a>
                </li>
                <li>
                    <a href="tel:0800204040">
                        <img src="/nav-icons/phone.svg" alt="" />
                    </a>
                </li>
                <div>
                    <li>
                        <a href="https://www.instagram.com/smaki.maki/">
                            <svg width="16" height="16" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m10.908 7.97c0 1.6213-1.3191 2.9411-2.9411 2.9411-1.6213 0-2.9404-1.3198-2.9404-2.9411 0-1.6213 1.3191-2.9404 2.9404-2.9404 1.622 0 2.9411 1.3191 2.9411 2.9404zm1.0689 1e-5c0-2.211-1.7984-4.01-4.01-4.01-2.211 0-4.01 1.799-4.01 4.01 0 2.2116 1.799 4.01 4.01 4.01 2.2116 0 4.01-1.7984 4.01-4.01z" fill="#fff"></path></g><g><path d="m13.374 1.0669c0.8576 0 1.5558 0.6976 1.5558 1.5552v10.756c0 0.8576-0.69824 1.5552-1.5558 1.5552h-10.755c-0.8576 0-1.5558-0.6976-1.5558-1.5552v-10.756c0-0.8576 0.69824-1.5552 1.5558-1.5552zm2.6227 12.311v-10.756c0-1.4458-1.177-2.6221-2.6227-2.6221h-10.755c-1.4458 0-2.6221 1.1763-2.6221 2.6221v10.756c0 1.4458 1.1763 2.6221 2.6221 2.6221h10.755c1.4458 0 2.6227-1.1763 2.6227-2.6221z" fill="#fff"></path></g><g><path d="m11.34 3.5866c0-0.57417 0.46546-1.0396 1.0396-1.0396s1.0396 0.46546 1.0396 1.0396-0.46546 1.0396-1.0396 1.0396-1.0396-0.46546-1.0396-1.0396z" fill="#fff"></path></g></g></svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/smaki.makii/">
                            <svg version="1.1" width="9" height="16" viewBox="0 0 9 16" xmlns="http://www.w3.org/2000/svg"><g><path d="m2.8384 8.0064h-1.8515v-1.5942h1.8444l0.12889-2.9126c0.06251-1.4202 1.2232-2.5197 2.6499-2.5197h0.03609l1.7477 0.02304-0.0348 1.5443h-1.3791c-0.75335 0-1.3656 0.60864-1.3656 1.3568v2.5082h2.7228l-0.12309 1.5942h-2.5997v7.0138h-1.7761zm2.7621 0.97984h2.5268l0.27518-3.5539h-2.802v-1.5283c0-0.208 0.17013-0.37696 0.37957-0.37696h2.3438l0.07927-3.4906-2.7434-0.03648h-0.05027c-1.9565 0-3.5489 1.5091-3.6353 3.456l-0.087 1.9763h-1.8869v3.5539h1.8515v7.0138h3.7487z" fill="#fff"></path></g></svg>
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default LeftNav