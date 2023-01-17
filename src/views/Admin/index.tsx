import React from 'react'
import { Panel, Stocks } from 'views'
import { Routes, Route } from 'react-router-dom'

import styles from './Admin.module.scss'
import Table from 'components/Table'

const data = [
    'Roses are red',
    'Violets are blue',
    'Sugar is sweet',
    'And so are you',
]

const Admin = () => {
    const title = 'PURECO: Кошачий наполнитель'
    return (
        <>
            <div className={styles.wrapper}>
                <Panel />
                <Routes>
                    <Route path='/' element={<></>} />
                    <Route path='/stocks' element={<Stocks />} />
                    {/* <CardPanel title={title}>
                                <Card title={title} />
                                <List data={data} className={styles.list} />
                            </CardPanel> */}
                </Routes>
            </div>
        </>
    )
}

export default Admin
