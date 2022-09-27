import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import externalLinkSVG from '../../../public/external-link.svg';
import { NavBarSections } from '../NavBar';
import styles from '../NavBarCard/NavBarCard.module.scss';

export interface NavBarCardItems {
    icon: any;
    name: string;
}

export interface NavBarRouteCard extends NavBarCardItems {
    route?: string;
}

export interface NavBarUrlCard extends NavBarCardItems {
    url?: string;
}

export type NavBarCardType = NavBarRouteCard & NavBarUrlCard;

function NavBarCardLink({ items, children }: { items: NavBarCardType, children: ReactElement }) {
    let link;
    if (items?.route) {
        return (
            <Link href={items.route as string}>
                {children}
            </Link>
        )
    }
    return (
        <a href={items.url} target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}

function NavBarCard({ items }: { items: NavBarCardType }) {
    return (<>
        <NavBarCardLink items={items}>
            <div className={styles.navBarCardContainer}>
                <div className={styles.navBarCardText}>
                    <span>
                        <Image src={items.icon} height={30} width={30} alt='nav bar icon' />
                    </span>
                    <span>
                        {items.name}
                    </span>
                </div>
                <div className={styles.navBarCardUrl}>
                    <span>
                        <Image src={externalLinkSVG} height={30} width={30} alt='external link icon' />
                    </span>
                </div>
            </div>
        </NavBarCardLink>
    </>);
}

export default NavBarCard;