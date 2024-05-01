import SaleBanner from '../../components/SaleBanner/SaleBanner'
import { Outlet } from "react-router-dom";

function MainPage() {
    return (
        <div>
            <SaleBanner openClose={true} />
            <Outlet />
        </div>
    )
}

export default MainPage