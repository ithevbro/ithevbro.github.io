import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import Auth from "./Authentication/Auth";
import { GlobalOverlayState, overlayReducer } from "../global-state/GlobalOverlay";
import { useReducer } from "react";
import { Outlet } from "react-router-dom";
import { BasketContext, reducerBasket } from '../components/Cart/GlobalStateBasket'


function Layout() {
    const [globalOverlayData, setGlobalOverlayData] = useReducer(overlayReducer, { main: false })
    const [cartData, setCartData] = useReducer(reducerBasket, [])

    return (
        <BasketContext.Provider value={{ cartData, setCartData }}>
            <GlobalOverlayState.Provider value={{ globalOverlayData, setGlobalOverlayData, }}>
                <Header />
                <Cart />
                <Outlet />
                <Auth />
            </GlobalOverlayState.Provider>
        </BasketContext.Provider>
    )
}

export default Layout