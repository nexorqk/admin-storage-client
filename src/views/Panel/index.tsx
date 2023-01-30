import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometer, faBasketShopping } from '@fortawesome/free-solid-svg-icons'

import styles from './Panel.module.scss'

const Panel = () => {
    const tachometerIcon = <FontAwesomeIcon icon={faTachometer} />
    const basketShopping = <FontAwesomeIcon icon={faBasketShopping} />
    return (
        <>
            <ul
                className={`${styles.sidebar} ${styles.bgGradientPrimary} ${styles.navbarNav} ${styles.yellow}`}
            >
                <a className={`${styles.sidebarBrand}`}>WildBerries</a>
                <hr className={styles.sidebarDivider} />
                <li className={styles.navItem}>
                    <Link to='/' className={styles.navLink}>
                        <i>{tachometerIcon}</i>
                        Статистика
                    </Link>
                    <Link to='stocks' className={styles.navLink}>
                        <i>{basketShopping}</i>
                        Товары
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Panel
