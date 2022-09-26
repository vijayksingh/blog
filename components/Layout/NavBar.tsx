import NavBarCard from "./NavBarCard/NavBarCard";
import homeSVG from '../../public/home.svg';

export enum NavBarSections {
    DEFAULT = '',
    WORK = 'Work',
    PRESENCE = 'Presence'
}

function NavBar() {
    return (<>
        {/* {
            Object.values(NavBarSections).map((section) => (
                <div key={section}>
                    {section}
                </div>
            ))
        } */}
        {
            <nav>
                <NavBarCard items={{
                    icon: homeSVG,
                    name: 'Test',
                    route: '',
                }}></NavBarCard>
            </nav>

        }
    </>);
}

export default NavBar;