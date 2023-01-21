import React from 'react'
import Table from 'components/Table'
import { Button } from '@mui/material'
import styles from './Stocks.module.scss'
import CreateStock from './CreateStock'
import CreateGroup from './CreateGroup'

const Stocks = () => {
    const [openStock, setOpenStock] = React.useState(false)
    const [openGroup, setOpenGroup] = React.useState(false)

    const handleOpenStock = () => setOpenStock(true)
    const handleCloseStock = () => setOpenStock(false)

    const handleOpenGroup = () => setOpenGroup(true)
    const handleCloseGroup = () => setOpenGroup(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <Button variant='outlined' onClick={handleOpenStock}>
                    Товары
                </Button>
                <CreateStock open={openStock} close={handleCloseStock} />
                <Button variant='outlined' onClick={handleOpenGroup}>
                    Группы
                </Button>
                <CreateGroup open={openGroup} close={handleCloseGroup} />
                <Button variant='outlined' disabled>
                    Импорт
                </Button>
            </div>
            <Table />
        </div>
    )
}

export default Stocks
