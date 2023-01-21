import React from 'react'
import { ModalComponent } from 'components'

interface CreateStockProps {
    open: boolean
    close: () => void
}

const CreateStock = ({ open, close }: CreateStockProps) => {
    return (
        <ModalComponent open={open} close={close}>
            <div>CreateStock</div>
        </ModalComponent>
    )
}

export default CreateStock
