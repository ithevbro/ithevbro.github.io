import { useState } from "react"
import style from './arcadiy.module.css'

function Arcadiy({ question, answer }) {
    const [show, setShow] = useState(false)

    function togleAcard() {
        setShow(!show)
    }

    return (
        <li className={style.acard + (show ? ' ' + style.active : '')}>
            <div onClick={togleAcard} className={style.top}>
                <h3>{question}</h3>
                <div className={style.arrow}>&#11167;</div>
            </div>
            <p className={style.content}>{answer}</p>
        </li>
    )
}


export default Arcadiy