import { useState } from "react"
import style from './arcadiy.module.css'

function Arcadiy({ qa }) {
    const [show, setShow] = useState(null)

    function togleAcard(item) {
        setShow(show === item ? null : item)
    }

    function makeList() {
        let arr = []
        for (const item in qa) {
            let li = <li key={item} className={style.acard + (show === item ? ' ' + style.active : '')}>
                <div onClick={() => togleAcard(item)} className={style.top}>
                    <h3>{item}</h3>
                </div>
                <p className={style.content}>{qa[item]}</p>
            </li>

            arr.push(li)
        }
        return arr
    }

    return (
        <ul>
            {makeList()}
        </ul>
    )
}


export default Arcadiy