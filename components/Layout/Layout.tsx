import { ReactElement } from "react";
import NavBar from "./NavBar";

function Layout({ children }: { children: ReactElement }) {
    return (<>
    <div className="main-container">
    <NavBar />
        <div>
            {children}
        </div>
    </div>     
    </>);
}

export default Layout;