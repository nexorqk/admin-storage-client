import React from 'react'
import { Panel } from 'rsuite'
import styles from './Card.module.scss'

type Props = {
    title: string
}

const Card = ({ title }: Props) => {
    return (
        <div className={styles.card}>
            <Panel
                className={styles.cardItem}
                shaded
                bordered
                bodyFill
                style={{ display: 'inline-block', width: 240 }}
            >
                <img src='https://via.placeholder.com/240x240' height='240' />
                <Panel header='RSUITE'>
                    <p>
                        <small>{title}</small>
                    </p>
                </Panel>
            </Panel>
        </div>
    )
}

export default Card
