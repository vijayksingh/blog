import { ReactElement } from "react";
import NavBar from "./NavBar";

function Layout({ children }: { children: ReactElement }) {
    return (<>
        <NavBar />
        <div>
            {children}
        </div>
    </>);
}

export default Layout;