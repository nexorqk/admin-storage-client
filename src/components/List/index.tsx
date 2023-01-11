import React from 'react'
import { Panel, List as ListDefault } from 'rsuite'

import styles from 'List.module.scss'

interface Props {
    data: string[]
	className: string
}

const List = ({ data, className }: Props) => {
    return (
        <div className={className}>
            <Panel header='Large' bordered>
                <ListDefault size='lg'>
                    {data.map((item, index) => (
                        <ListDefault.Item key={index} index={index}>
                            {item}
                        </ListDefault.Item>
                    ))}
                </ListDefault>
            </Panel>
        </div>
    )
}

export default List
