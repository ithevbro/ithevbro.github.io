import { useContext } from "react"
import { GlobalOverlayState } from "../../global-state/GlobalOverlay"

function CloseBtn() {
    const setGlobalOverlayData = useContext(GlobalOverlayState).setGlobalOverlayData

    return (
        <small onClick={() => setGlobalOverlayData({ type: 'main' })}></small>
    )
}

export default CloseBtn