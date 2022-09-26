import Image from 'next/image';
import homeSVG from '../../../public/home.svg';
import styles from '../NavBarCard/NavBarCard.module.scss';

interface NavBarCardItems {
    icon: any;
    name: string;
}

interface NavBarRouteCard extends NavBarCardItems{
    route: string;
}

interface NavBarUrlCard extends NavBarCardItems{
    url: string;
}

export type NavBarCard = NavBarRouteCard | NavBarUrlCard;

function NavBarCard({items}: {items: NavBarCard}) {
    return ( <>
        <div className={styles.navBarCardContainer}>
            <div className={styles.navBarCardText}>
            <span>
                <Image src={items.icon} height={30} width={30}  />
            </span>
            <span>
                {items.name}
            </span>
            </div>
            <div className={styles.navBarCardUrl}>
            <span>
                Go
            </span>
            </div>
        </div>
    </> );
}

export default NavBarCard;