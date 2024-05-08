import { useContext } from 'react'
import style from './responseForm.module.css'
import { GlobalOverlayState } from '../../global-state/GlobalOverlay'
import BasicInput from '../../components/Inputs/BasicInput'
import Phone from '../../components/Inputs/Phone'


function ResponseForm() {

    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData

    return (
        <>
            <h1>Залишити відгук</h1>
            <form>
                <BasicInput placeholder={"Ім'я*"} inputName={'userName'} inputType={'text'} />
                <Phone placeholder={'Номер Телефону*'} id={'phoneNumber'} />
                <label htmlFor="area" className={style.label_area}>Коментар</label>
                <textarea rows="7" name="area" id="area"></textarea>
                <button className={style.send_btn} onClick={(e) => {
                    e.preventDefault()
                    setGlobalOverlayData({ type: 'main' })
                }}>Відправити</button>
            </form>
        </>
    )
}

export default ResponseForm