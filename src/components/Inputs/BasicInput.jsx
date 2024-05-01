import style from './basic-input.module.css'
import { useState } from 'react'

function BasicInput({ placeholder, inputName, inputType }) {

    const [focus, setFocus] = useState(false)
    const [touched, setTouched] = useState(false)
    const [value, setValue] = useState('')

    function focusHandler() {
        setFocus(true)
    }

    function blurHandler() {
        setFocus(false)
        if (value == '') {
            setTouched(false)
        } else {
            setTouched(true)
        }
    }

    function changeValue(e) {
        setValue(e.target.value)
    }

    return (
        <label htmlFor={inputName} className={style.input_container}>
            <input onChange={changeValue} value={value} autoComplete='on' onBlur={blurHandler} onFocus={focusHandler} type={inputType} id={inputName} />
            <span className={`${style.input_span} ${focus || touched ? style.span_bottom : ''}`}>{placeholder}</span>
        </label>
    )
}

export default BasicInput