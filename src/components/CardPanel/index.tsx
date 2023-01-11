import React, { ReactNode } from 'react'
import { Button, ButtonGroup, Panel, Stack } from 'rsuite'

import styles from './CardPanel.module.scss'

type PropsType = {
    title: string
    children: ReactNode
}

const CardPanel = ({ title, children }: PropsType) => {
    return (
        <div className={styles.cardWrapper}>
            <Panel
                className={styles.panel}
                bordered
                header={
                    <Stack justifyContent='space-between'>
                        <span>{title}</span>
                        <ButtonGroup>
                            <Button active>More</Button>
                        </ButtonGroup>
                    </Stack>
                }
            >
                <div className={styles.cardInfo}>
                    {children}
                </div>
            </Panel>
        </div>
    )
}

export default CardPanel
