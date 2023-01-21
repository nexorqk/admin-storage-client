import * as React from 'react'
import { Modal, Button } from 'rsuite'

interface Props {
    open: boolean
    close: () => void
    children: React.ReactNode
}

const ModalComponent = ({ open, close, children }: Props) => {
    return (
        <>
            <Modal keyboard={false} open={open} onClose={close}>
                <Modal.Header>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>

                <Modal.Body>{children}</Modal.Body>
                <Modal.Footer>
                    <Button onClick={close} appearance='primary'>
                        Ok
                    </Button>
                    <Button onClick={close} appearance='subtle'>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalComponent
