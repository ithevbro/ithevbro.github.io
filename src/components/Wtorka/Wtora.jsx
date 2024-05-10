import style from './wtora.module.css'
import { useState } from 'react'

function Wtora({ text }) {

    const [show, setShow] = useState(false)

    function toogleShow() {
        setShow(!show)
    }

    return (
        <>
            <div className={style.content + (show ? '' : ' ' + style.hide)}>
                {text}
            </div>
            <button className={style.toggle + (show ? '' : ' ' + style.active)} onClick={toogleShow}>{show ? "Згорнути" : "Читати більше"}</button>
        </>
    )
}

export default Wtora