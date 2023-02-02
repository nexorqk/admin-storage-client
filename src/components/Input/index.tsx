import React from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import './index.scss'

const Input = (props: TextFieldProps) => {
    return (
        <TextField
            {...props}
            id='outlined-basic'
            label='firstName'
            variant='outlined'
            className='input'
        />
    )
}

export default Input
