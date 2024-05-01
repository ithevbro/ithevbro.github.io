import style from "./auth.module.css"
import Phone from "../Inputs/Phone"

function ForgotPass() {

    return (
        <>
            <h3>Забули пароль?</h3>
            <form>
                <Phone placeholder={'Вкажіть номер телефону *'} id={'fp-phone'} />
                <button>ВІДПРАВИТИ</button>
            </form>
        </>
    )

}

export default ForgotPass