import React, { useEffect } from 'react'
import Table from 'components/Table'
import { Button } from '@mui/material'
import styles from './Stocks.module.scss'
import CreateStock from './CreateStock'
import CreateGroup from './CreateGroup'
import { getWBlist } from 'api/api'
// import { useParams } from 'react-router-dom'

const Stocks = () => {
    const [openStock, setOpenStock] = React.useState(false)
    const [openGroup, setOpenGroup] = React.useState(false)

    const handleOpenStock = () => setOpenStock(true)
    const handleCloseStock = () => setOpenStock(false)

    const handleOpenGroup = () => setOpenGroup(true)
    const handleCloseGroup = () => setOpenGroup(false)

    // const { id } = useParams()
    // console.log('id',id)

    useEffect(() => {
        const getCardData = async () => {
            const data = await getWBlist()
            console.log('data :>> ', data)
            return data
        }
        getCardData()
    },[])

    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <div className={styles.navBlockLeft}>
                    <Button variant='outlined' onClick={handleOpenStock}>
                        Товары
                    </Button>
                    <CreateStock open={openStock} close={handleCloseStock} />
                    <Button variant='outlined' onClick={handleOpenGroup}>
                        Группы
                    </Button>
                    <CreateGroup open={openGroup} close={handleCloseGroup} />
                    <Button variant='outlined' disabled>
                        Фильтр
                    </Button>
                </div>
                <div className={styles.navBlockRight}>
                    <Button variant='outlined' disabled>
                        Импорт
                    </Button>
                    <Button variant='outlined' disabled>
                        Экспорт
                    </Button>
                </div>
            </div>
            <Table />
        </div>
    )
}

export default Stocks
