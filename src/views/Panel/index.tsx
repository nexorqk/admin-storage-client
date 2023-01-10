import styles from './Panel.module.scss'

const Panel = () => {
    return (
        <>
            <ul
                className={`${styles.sidebar} ${styles.bgGradientPrimary} ${styles.navbarNav} ${styles.yellow}`}
            >
                <a className={`${styles.sidebarBrand}`}>WildBerries</a>
                <hr className={styles.sidebarDivider} />
                <li className={styles.navItem}>
                    <a className={`${styles.navLink} ${styles.navItem}`}>
                        Dashboard
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Panel
