import React from 'react'
import { ModalComponent } from 'components'
import CreateStockForm from './CreateStockForm'

interface CreateStockProps {
    open: boolean
    close: () => void
}

const CreateStock = ({ open, close }: CreateStockProps) => {
    return (
        <ModalComponent open={open} close={close}>
            <CreateStockForm />
        </ModalComponent>
    )
}

export default CreateStock
