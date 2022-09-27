import NavBarCard, { NavBarCardType, NavBarRouteCard, NavBarUrlCard } from "./NavBarCard/NavBarCard";
import homeSVG from '../../public/home.svg';

export enum NavBarSections {
    DEFAULT = 'DEFAULT',
    WORK = 'Work',
    PRESENCE = 'Presence'
}

const name: string = "Saif";

export interface NavBarDetails extends NavBarRouteCard, NavBarUrlCard {
    section: NavBarSections
}

const navData: NavBarDetails[] = [
    {
        icon: homeSVG,
        name: 'Home',
        route: '/',
        section: NavBarSections.DEFAULT,
    },
    {
        icon: homeSVG,
        name: 'Notes',
        route: '/notes',
        section: NavBarSections.DEFAULT,
    },
    {
        icon: homeSVG,
        name: 'Learning',
        route: '/learning',
        section: NavBarSections.DEFAULT,
    },
    {
        icon: homeSVG,
        name: 'affluent.io',
        section: NavBarSections.WORK,
        url: 'https://www.affluent.io/'
    },
    {
        icon: homeSVG,
        name: 'Major League Hacking',
        section: NavBarSections.WORK,
        url: 'https://www.affluent.io/'
    },
    {
        icon: homeSVG,
        name: 'Github',
        section: NavBarSections.PRESENCE,
        url: ''
    },
    {
        icon: homeSVG,
        name: 'Linkedin',
        section: NavBarSections.PRESENCE,
        url: ''
    },
]

function NavBarCardCollection({ cards }: { cards: NavBarCardType[] }) {
    return (
        <div>
            {
                cards.map((card, index) => (
                    <NavBarCard key={index} items={{
                        icon: card.icon,
                        name: card.name,
                        route: card?.route,
                        url: card?.url
                    }}></NavBarCard>
                ))
            }
        </div>
    )
}

function NavBarSection({ section, navData }: { section: string, navData: NavBarDetails[] }) {
    let sectionEle;
    if (section !== NavBarSections.DEFAULT) {
        sectionEle = <div className="nav-category">
            {section}
        </div>
    }

    return (<>
        {sectionEle}
        <div className="notes-cards">
            <NavBarCardCollection cards={navData}></NavBarCardCollection>
        </div>
    </>);
}

function NavBar() {
    return (<>
        {
            <nav>
                <div className="notes-heading">
                    {name}
                </div>

                {
                    Object.values(NavBarSections).map((section) => (
                        <div key={section}>
                            <NavBarSection section={section} navData={navData.filter((data) => {
                                if (data.section === section) {
                                    return data;
                                }
                            })}></NavBarSection>
                        </div>
                    ))
                }
            </nav>

        }
    </>);
}

export default NavBar;