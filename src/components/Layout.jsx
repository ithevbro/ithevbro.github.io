import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import Auth from "./Authentication/Auth";
import Footer from "./Footer/Footer";
import { GlobalOverlayState, overlayReducer } from "../global-state/GlobalOverlay";
import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import { BasketContext, reducerBasket } from '../components/Cart/GlobalStateBasket'
import { SouseContext, reducerSouse } from "./FreeSouses/GlobalStateSouse";


function Layout() {
    let products = localStorage.getItem('prod')
    let souse = localStorage.getItem('souseInStorage')
    const [globalOverlayData, setGlobalOverlayData] = useReducer(overlayReducer, { main: false })
    const [cartData, setCartData] = useReducer(reducerBasket, JSON.parse(products) || [])
    const [souseData, setSouseData] = useReducer(reducerSouse, JSON.parse(souse) || { isVisible: false, usual: 0, study: 0, soy: 0, totalSet: 0, totalSoy: 0 })

    return (
        <BasketContext.Provider value={{ cartData, setCartData }}>
            <SouseContext.Provider value={{ souseData, setSouseData }}>
                <GlobalOverlayState.Provider value={{ globalOverlayData, setGlobalOverlayData, }}>
                    <Header />
                    <Cart />
                    <Outlet />
                    <Auth />
                    <Footer />
                </GlobalOverlayState.Provider>
            </SouseContext.Provider>
        </BasketContext.Provider>
    )
}

export default Layout