import WbCard from '../../components/wb-card'
import Panel from '../Panel'
import styles from './Admin.module.scss'

const Admin = () => {
    return (
        <div className={styles.wrapper}>
            <Panel />
            <WbCard title='PURECO Кошачий наполнитель для кошачьего туалета древесный' />
        </div>
    )
}

export default Admin
