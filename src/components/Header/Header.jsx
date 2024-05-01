import TopHeaderContainer from "./TopHeaderContainer/TopHeaderContainer"
import LeftNav from "./LeftNav/LeftNav"
import HeaderOverlay from "./HeaderOverlay/HeaderOverlay";
import style from './header.module.css'
import { useState, useEffect, useContext } from "react";
import { GlobalOverlayState } from "../../global-state/GlobalOverlay";

function Header() {

    const globalOverlayData = useContext(GlobalOverlayState).globalOverlayData
    const [overlaySwitch, setOverlaySwitch] = useState(false)
    const [scroll, setScroll] = useState()
    const [hide, setHide] = useState(false)
    const [topOnly, setToponly] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', scrollHandle)
        window.addEventListener('resize', resizeHandle)
        return () => {
            window.removeEventListener('scroll', scrollHandle)
            window.removeEventListener('resize', resizeHandle)
        }
    }, [scroll])

    useEffect(() => {
        if (Object.keys(globalOverlayData).length == 1 && overlaySwitch) {
            document.documentElement.style.overflow = 'hidden'
        } else if (overlaySwitch) {
            document.documentElement.style.overflow = 'hidden'
        } else if (Object.keys(globalOverlayData).length > 1) {
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.documentElement.style.overflow = ''
        }

    }, [overlaySwitch, globalOverlayData])

    function scrollHandle() {
        if (window.innerWidth < 1200) {
            setScroll(window.scrollY)
            if (window.scrollY < scroll) {
                setHide(false)
            } else {
                setHide(true)
            }
        } else {
            setScroll(window.scrollY)
            if (window.scrollY < scroll) {
                setToponly(false)
            } else {
                setToponly(true)
            }
        }
    }

    function resizeHandle() {
        if (window.innerWidth > 1200) {
            setHide(false)
        }
    }

    function handleOverlaySwitch(type) {
        if (type == 'open') {
            setOverlaySwitch(true)
        } else {
            setOverlaySwitch(false)
        }
    }

    return (
        <header className={style.mainHeader}>
            <TopHeaderContainer topOnly={topOnly} hide={hide} overlaySwitch={overlaySwitch} handleOverlaySwitch={handleOverlaySwitch} />
            <LeftNav hide={hide} handleOverlaySwitch={handleOverlaySwitch} overlaySwitch={overlaySwitch} />
            <HeaderOverlay overlaySwitch={overlaySwitch} handleOverlaySwitch={handleOverlaySwitch} />
        </header>
    )

}

export default Header