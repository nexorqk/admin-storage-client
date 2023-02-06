import React from 'react'
import { Panel, Stocks, StocksFormPage } from 'views'
import { Routes, Route } from 'react-router-dom'

import styles from './Admin.module.scss'

const Admin = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Panel />
                <Routes>
                    <Route path='/stocks' element={<Stocks />} />
                    <Route path='/stock' element={<StocksFormPage />} />
                </Routes>
            </div>
        </>
    )
}

export default Admin
