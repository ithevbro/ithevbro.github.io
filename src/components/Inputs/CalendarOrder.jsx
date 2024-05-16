import style from './calendarOrder.module.css'
import { useState } from 'react'

function CalendarOrder() {
    const [month, setMonth] = useState(new Date().getMonth() + 1)
    const [year, setYear] = useState(new Date().getFullYear())
    const [day, setDay] = useState(new Date().getDate())
    const [focus, setFocus] = useState(false)
    const [touched, setTouched] = useState(false)
    let data = new Date(year, month - 1).getDay()
    let data2 = new Date(year, month, 0).getDate()
    let today = new Date()
    // let today2 = new Date(2024, 4, 31)

    let inputValue = touched ? `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}` : ''

    function creatCalendar(endDay) {
        if (data == 0) {
            data = 7
        }
        let arr = []
        let pusti = false
        let cells = []
        for (let i = 1; i <= endDay; i++) {
            if (i == data && !pusti) {
                pusti = true
                i -= data - 1
            }
            if (i < data && !pusti) {
                cells.push(<td className={style.disabled_td} key={-i}>{null}</td>)
            } else {
                // if (today2.getDate() === new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()) {
                //     console.log('haha');
                // }
                cells.push(<td
                    className={`${i === day ? style.active_td + ' ' + style.enabled_td : i === today.getDate() || i === today.getDate() + 1 ? style.enabled_td : style.disabled_td}`}
                    onClick={i === today.getDate() || i === today.getDate() + 1 ? () => { dayChange(i) } : null}
                    key={i}>{i}</td>)
            }
            if (cells.length > 6) {
                let row = <tr key={i + cells.length}>{cells}</tr>
                arr.push(row)
                cells = []
            } else if (cells.length <= 6 && i == endDay) {
                let row = <tr key={i + cells.length}>{cells}</tr>
                arr.push(row)
            }
        }
        return arr
    }

    function dayChange(num) {
        setDay(num)
        setTouched(true)
    }

    function handleOnFocus() {
        setFocus(true)
    }

    function closeTable(e) {
        e.preventDefault()
        setFocus(false)
    }

    function nameOfMonth() {
        switch (today.getMonth()) {
            case 0:
                return 'Січень'
            case 1:
                return 'Лютий'
            case 2:
                return 'Березень'
            case 3:
                return 'Квітень'
            case 4:
                return 'Травень'
            case 5:
                return 'Червень'
            case 6:
                return 'Липень'
            case 7:
                return 'Серпень'
            case 8:
                return 'Вересень'
            case 9:
                return 'Жовтень'
            case 10:
                return 'Листопад'
            case 11:
                return 'Грудень'
        }
    }

    return (
        <div className={style.boss_calc}>
            <label htmlFor="calendar_order" className={style.label_calculator}>
                <input readOnly value={inputValue} name='calendar_order' type="text" onFocus={handleOnFocus} id='calendar_order' />
                <span className={`${style.calendar_span} ${focus || touched ? style.span_bottom : ''} `}>Дата доставки</span>
            </label>
            <div className={`${style.calendar} ${!focus ? style.hide : ''} `}>
                <table >
                    <thead>
                        <tr className={style.upravlinnya}>
                            <th colSpan='7'>
                                {nameOfMonth() + ' ' + today.getFullYear()}
                            </th>
                        </tr>
                        <tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Нд</th></tr>
                    </thead>
                    <tbody>{creatCalendar(data2)}</tbody>
                </table>
                <div className={style.confirm}><button onClick={closeTable}>Підтвердити</button></div>
            </div>
        </div>
    )
}

export default CalendarOrder