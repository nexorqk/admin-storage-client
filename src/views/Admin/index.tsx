import React from 'react'
import { Panel, Stocks } from 'views'
import { Routes, Route } from 'react-router-dom'

import styles from './Admin.module.scss'
import Navbar from 'components/Navbar'

const Admin = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <Panel />

                <div className={styles.container}>
                    <Navbar />
                    <Routes>
                        <Route path='/stocks' element={<Stocks />} />
                        <Route path='/stock/:id' element={<Stocks />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Admin
