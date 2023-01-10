import { FC } from 'react'
import { Button, ButtonGroup, List, Panel, Placeholder, Stack } from 'rsuite'
import styles from './WbCard.module.scss'

type PropsType = {
    title: string
}

const CardComponent = ({ title }: PropsType) => {
    const data = [
        'Roses are red',
        'Violets are blue',
        'Sugar is sweet',
        'And so are you',
    ]

    return (
        <div className={styles.cardWrapper}>
            <Panel
                className={styles.panel}
                bordered
                header={
                    <Stack justifyContent='space-between'>
                        <span>{title}</span>
                        <ButtonGroup>
                            <Button active>Day</Button>
                        </ButtonGroup>
                    </Stack>
                }
            >
                <div className={styles.card}>
                    <Panel
                        className={styles.cardItem}
                        shaded
                        bordered
                        bodyFill
                        style={{ display: 'inline-block', width: 240 }}
                    >
                        <img
                            src='https://via.placeholder.com/240x240'
                            height='240'
                        />
                        <Panel header='RSUITE'>
                            <p>
                                <small>
                                    A suite of React components, sensible UI
                                    design, and a friendly development
                                    experience.
                                </small>
                            </p>
                        </Panel>
                    </Panel>
                    <div className={styles.cardInfo}>
                        Text
                        <Panel header='Large' bordered>
                            <List size='lg'>
                                {data.map((item, index) => (
                                    <List.Item key={index} index={index}>
                                        {item}
                                    </List.Item>
                                ))}
                            </List>
                        </Panel>
                    </div>
                </div>
            </Panel>
        </div>
    )
}

export default CardComponent
