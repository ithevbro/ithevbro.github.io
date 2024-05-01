import style from './phone.module.css'
import { useState, useRef, useEffect } from 'react'

function Phone({ placeholder, id }) {

    const [focus, setFocus] = useState(false)
    const [touched, setTouched] = useState(false)
    const [value, setValue] = useState('')
    const [x, setX] = useState(null)
    let inp = useRef()

    useEffect(() => {
        setX(value.indexOf('x'))
        inp.current.selectionStart = x
        inp.current.selectionEnd = x
    }, [value, x])

    function focusHandler() {
        setFocus(true)
        if (!value) {
            setValue('+38 (0xx) xxx xx xx')
        }
    }

    function blurHandler() {
        setFocus(false)
        if (!touched) {
            setValue('')
        }
    }

    function changeValue(e) {
        if (inp.current.selectionStart > 19) {
            return
        }
        let start = value.slice(0, x)
        let end = value.slice(x + 1)
        if (value.length > e.target.value.length && x > 6 || x == -1) {
            if (x == -1) {
                setValue(value.slice(0, inp.current.selectionStart) + 'x' + value.slice(inp.current.selectionStart + 1))
            }
            else {
                if (value[x - 2] == ')') {
                    setValue(value.slice(0, x - 3) + 'x) ' + value.slice(x))
                } else if (value[x - 1] == ' ') {
                    setX(x => x - 1)
                    setValue(value.slice(0, x - 2) + 'x ' + value.slice(x))
                } else {
                    setValue(value.slice(0, x - 1) + 'x' + value.slice(x))
                }


            }
        } else {
            if (+e.target.value[x] || +e.target.value[x] === 0) {
                setValue(start + e.target.value[x] + end)
            } else {
                return
            }

        }
        setTouched(true)
    }

    function clickSelect() {
        inp.current.selectionStart = x
        inp.current.selectionEnd = x
    }

    return (
        <label htmlFor={id} className={style.input_container}>
            <input onSelect={clickSelect} autoComplete='on' ref={inp} value={value} onChange={changeValue} onBlur={blurHandler} onFocus={focusHandler} type="tel" id={id} inputMode='numeric' />
            <span className={`${style.input_span} ${focus || touched ? style.span_bottom : ''}`}>{placeholder}</span>
        </label>
    )
}

export default Phone