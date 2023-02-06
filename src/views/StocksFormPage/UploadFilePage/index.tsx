import React, { useState, useEffect } from 'react'
import { Button, Box } from '@mui/material'
import styles from './UploadFilePage.module.scss'

const UploadFilePage = () => {
    const [selectedImage, setSelectedImage] = useState<File>()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (selectedImage) {
            // @ts-ignore
            setImageUrl(URL.createObjectURL(selectedImage))
        }
    }, [selectedImage])

    return (
        <div className={styles.uploadContainer}>
            <div className={styles.uploadContainer}>
                <input
                    accept='image/*'
                    type='file'
                    id='select-image'
                    style={{ display: 'none' }}
                    // @ts-ignore
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                <div className={styles.uploadBlock}>
                    <label htmlFor='select-image'>
                        <Button
                            variant='contained'
                            color='primary'
                            component='span'
                        >
                            Upload Image
                        </Button>
                    </label>
                    <div>
                        <p>
                            Name:{' '}
                            {`${selectedImage?.name.slice(
                                0,
                                7
                            )}..${selectedImage?.name.substring(
                                selectedImage?.name.length - 4
                            )}`}
                        </p>
                        <p>Size: {selectedImage?.size}</p>
                    </div>
                </div>
            </div>
            {imageUrl && selectedImage && (
                <>
                    <Box textAlign='center'>
                        <img
                            src={imageUrl}
                            // @ts-ignore
                            alt={selectedImage.name}
                            height='100px'
                        />
                    </Box>
                </>
            )}
        </div>
    )
}

export default UploadFilePage
