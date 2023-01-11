import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometer } from '@fortawesome/free-solid-svg-icons'

import styles from './Panel.module.scss'

const Panel = () => {
    const tachometerIcon = <FontAwesomeIcon icon={faTachometer} />
    return (
        <>
            <ul
                className={`${styles.sidebar} ${styles.bgGradientPrimary} ${styles.navbarNav} ${styles.yellow}`}
            >
                <a className={`${styles.sidebarBrand}`}>WildBerries</a>
                <hr className={styles.sidebarDivider} />
                <li className={styles.navItem}>
                    <a className={styles.navLink}>
                        <i>{tachometerIcon}</i>
                        Dashboard
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Panel
