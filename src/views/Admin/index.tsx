import React from 'react'
import { Card, CardPanel, List } from 'components'
import { Panel } from 'views'

import styles from './Admin.module.scss'

const data = [
    'Roses are red',
    'Violets are blue',
    'Sugar is sweet',
    'And so are you',
]

const Admin = () => {
    const title = 'PURECO: Кошачий наполнитель'
    return (
        <div className={styles.wrapper}>
            <Panel />
            <CardPanel title='PURECO Кошачий наполнитель'>
                <Card title={title} />
                <List data={data} className={styles.list} />
            </CardPanel>
        </div>
    )
}

export default Admin
