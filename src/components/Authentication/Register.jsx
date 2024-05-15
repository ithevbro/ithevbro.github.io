 import style from "./auth.module.css"
import { useContext } from "react"
import { GlobalOverlayState } from "../../global-state/GlobalOverlay"
import Calendar from "../Inputs/Calendar"
import BasicInput from "../Inputs/BasicInput"
import Phone from "../Inputs/Phone"

function Register() {
    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData
    return (
        <>
            <h3>Реєстрація</h3>
            <form>
                <BasicInput placeholder={"Ім'я"} inputName={'user-name'} inputType={'text'} />
                <Calendar />
                <Phone placeholder={'Вкажіть номер телефону'} id={'reg-phone'} />
                <BasicInput placeholder={"Пароль"} inputName={'user-password'} inputType={'password'} />
                <BasicInput placeholder={"Повторити пароль"} inputName={'user-password2'} inputType={'password'} />
                <button type="submit">ЗАРЕЄСТРУВАТИСЬ</button>
                <div className={style.popup}>
                    <p>Вже є акаунт? </p>
                    <a onClick={(e) => {
                        e.preventDefault()
                        setGlobalOverlayData({ type: 'login' })

                    }} href="">Увійти</a>
                </div>
            </form>
        </>
    )

}

export default Register