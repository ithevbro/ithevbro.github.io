import Login from "./Login"
import Register from "./Register"
import ForgotPass from "./ForgotPass"
import style from "./auth.module.css"
import CloseBtn from "./CloseBtn"
import { useContext } from "react"
import { GlobalOverlayState } from "../../global-state/GlobalOverlay"
import Basket from "../Cart/Basket"
import ResponseForm from "../../pages/About/ResponseForm"

function Auth() {
    const globalOverlayData = useContext(GlobalOverlayState).globalOverlayData

    return (
        <div className={`${style.dialog_wrapper} ${!globalOverlayData.main ? style.active_dialog : ''}`}>
            <div className={`${style.form_wrapper} ${globalOverlayData.login ? style.active : ''}`}>
                <Login />
                <CloseBtn />
            </div>
            <div className={`${style.form_wrapper} ${globalOverlayData.reg ? style.active : ''}`}>
                <Register />
                <CloseBtn />
            </div>
            <div className={`${style.form_wrapper} ${globalOverlayData.fp ? style.active : ''}`}>
                <ForgotPass />
                <CloseBtn />
            </div>
            <div className={`${style.basket_wrapper} ${globalOverlayData.basket ? style.active : ''}`}>
                <Basket />
            </div>
            <div className={`${style.form_wrapper} ${globalOverlayData.res ? style.active : ''}`}>
                <ResponseForm />
                <CloseBtn />
            </div>
        </div >
    )
}

export default Auth