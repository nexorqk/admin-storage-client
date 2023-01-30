import React from 'react'
import { Panel, Stocks } from 'views'
import { Routes, Route } from 'react-router-dom'

import styles from './Admin.module.scss'

const Admin = () => {
    
    return (
        <>
            <div className={styles.wrapper}>
                <Panel />
                <Routes>
                    <Route path='/' element={<></>} />
                    <Route path='/stocks' element={<Stocks />} />
                </Routes>
            </div>
        </>
    )
}

export default Admin
