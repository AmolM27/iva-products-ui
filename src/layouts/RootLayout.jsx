import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Navbar"; 

const RootLayout = () => {
    return ( 
        <div className="root-layout">
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default RootLayout;