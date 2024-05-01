import style from "./auth.module.css"
import { GlobalOverlayState } from "../../global-state/GlobalOverlay"
import { useContext } from "react"
import BasicInput from "../Inputs/BasicInput"
import Phone from "../Inputs/Phone"

function Login() {
    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData
    return (
        <>
            <h3>Вхід</h3>
            <form>
                <Phone placeholder={'Телефон *'} id={'login-phone'} />
                <BasicInput placeholder={"Пароль *"} inputName={'password'} inputType={'password'} />
                <a href="" onClick={(e) => {
                    e.preventDefault()
                    setGlobalOverlayData({ type: 'fp' })
                }}>Забули пароль?</a>
                <button>Увійти</button>
                <div className={style.popup}>
                    <p>Не маєш аккаунту? </p>
                    <a onClick={(e) => {
                        e.preventDefault()
                        setGlobalOverlayData({ type: 'reg' })
                    }} href="">Зареєструватись</a>
                </div>
            </form>
        </ >
    )
}

export default Login