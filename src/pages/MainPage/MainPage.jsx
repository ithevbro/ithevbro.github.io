import SaleBanner from '../../components/SaleBanner/SaleBanner'
import { Outlet } from "react-router-dom";
import style from './main.module.css'

function MainPage() {
    return (
        <main className={style.main_wrapper}>
            <SaleBanner openClose={true} />
            <Outlet />
        </main>
    )
}

export default MainPage