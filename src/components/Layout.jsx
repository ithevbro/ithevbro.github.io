import Cart from "./Cart/Cart";
import Header from "./Header/Header";
import Auth from "./Authentication/Auth";
import { GlobalOverlayState, overlayReducer } from "../global-state/GlobalOverlay";
import { useReducer } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
    const [globalOverlayData, setGlobalOverlayData] = useReducer(overlayReducer, { main: false })

    return (
            <GlobalOverlayState.Provider value={{ globalOverlayData, setGlobalOverlayData, }}>
                <Header />
                <Cart />
                <Outlet />
                <Auth />
            </GlobalOverlayState.Provider>
    )
}

export default Layout