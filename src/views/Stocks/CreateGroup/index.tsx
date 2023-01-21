import React from 'react'
import { ModalComponent } from 'components'

interface CreateGroupProps {
    open: boolean
    close: () => void
}

const CreateGroup = ({ open, close }: CreateGroupProps) => {
    return (
        <ModalComponent open={open} close={close}>
            <div>CreateGroup</div>
        </ModalComponent>
    )
}

export default CreateGroup
