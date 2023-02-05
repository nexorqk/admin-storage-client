/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef } from 'react'
import { ModalComponent } from 'components'
import CreateStockForm from './CreateStockForm'

interface CreateStockProps {
    open: boolean
    close: () => void
}

const CreateStock = ({ open, close }: CreateStockProps) => {
    const submitRef = useRef()
    return (
        <ModalComponent submitRef={submitRef} open={open} close={close}>
            <CreateStockForm submitRef={submitRef} />
        </ModalComponent>
    )
}

export default CreateStock
