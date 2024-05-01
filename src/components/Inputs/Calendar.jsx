import style from './calendar.module.css'
import { useState, useMemo } from 'react'

function Calendar() {
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(1993)
    const [day, setDay] = useState(1)
    const [focus, setFocus] = useState(false)
    const [touched, setTouched] = useState(false)
    let data = new Date(year, month - 1).getDay()
    let data2 = new Date(year, month, 0).getDate()
    let inputValue = touched ? `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}` : ''

    function creatCalendar(endDay) {
        const calendarTable = useMemo(() => {
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
                    cells.push(<td key={-i}>{null}</td>)
                } else {
                    cells.push(<td className={i == day ? style.active_td : ''} onClick={() => { dayChange(i) }} key={i}>{i}</td>)
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
        }, [day, month, year])

        return calendarTable
    }

    function selectYears() {
        const years = useMemo(() => {
            let arr = [];
            for (let i = 0; i <= 80; i++) {
                arr.push(<option key={i}>{1940 + i}</option>);
            }
            return arr;
        }, [])

        return years
    }

    function monthChange(e) {
        setMonth(+e.target.value);
        setTouched(true)
    }

    function yearChange(e) {
        setYear(+e.target.value);
        setTouched(true)
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

    function nextMonth(type) {
        if (type == '+') {
            setMonth(month + 1)
            if (month % 12 == 0) {
                setYear(year + 1)
                setMonth(1)
            }
        } else {
            setMonth(month - 1)
            if (month == 1) {
                setMonth(12)
                setYear(year - 1)
            }
        }
    }

    return (
        <div className={style.boss_calc}>
            <label htmlFor="calendar" className={style.label_calculator}>
                <input readOnly value={inputValue} name='calendar' type="text" onFocus={handleOnFocus} id='calendar'/>
                <span className={`${style.calendar_span} ${focus || touched ? style.span_bottom : ''} `}>День народження</span>
            </label>
            <div className={`${style.calendar} ${!focus ? style.hide : ''} `}>
                <table >
                    <thead>
                        <tr className={style.upravlinnya}>
                            <th onClick={() => nextMonth('-')}>&#10094;</th>
                            <th colSpan='5'>
                                <div>
                                    <select name='monthes' value={month} onChange={monthChange}>
                                        <option value='1'>Січень</option>
                                        <option value="2">Лютий</option>
                                        <option value="3">Березень</option>
                                        <option value="4">Квітень</option>
                                        <option value="5">Травень</option>
                                        <option value="6">Червень</option>
                                        <option value="7">Липень</option>
                                        <option value="8">Серпень</option>
                                        <option value="9">Вересень</option>
                                        <option value="10">Жовтень</option>
                                        <option value="11">Листопад</option>
                                        <option value="12">Грудень</option>
                                    </select>
                                    <select name='years' value={year} onChange={yearChange}>{selectYears()}</select>
                                </div>
                            </th>
                            <th onClick={() => nextMonth('+')}>&#10095;</th>
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

export default Calendar