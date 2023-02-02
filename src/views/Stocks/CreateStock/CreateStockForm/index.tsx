import React from 'react'
import { Input } from 'components'
import { useForm, Controller } from 'react-hook-form'
import './index.scss'

interface IFormInput {
    firstName: string
    lastName: string
    age: string
    grow: string
    throw: string
    iceCreamType: { label: string; value: string }
}

// interface CreateStockFormProps {}

const CreateStockForm = () => {
    const { control, handleSubmit } = useForm<IFormInput>()

    const onSubmit = (data: IFormInput) => {
        alert(JSON.stringify(data))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                render={({ field }) => <Input {...field} />}
                name='firstName'
                control={control}
                defaultValue=''
            />
            <Controller
                render={({ field }) => <Input {...field} />}
                name='lastName'
                control={control}
                defaultValue=''
            />
            <Controller
                render={({ field }) => <Input {...field} />}
                name='age'
                control={control}
                defaultValue=''
            />
            <Controller
                render={({ field }) => <Input {...field} />}
                name='grow'
                control={control}
                defaultValue=''
            />
            <Controller
                render={({ field }) => <Input {...field} />}
                name='throw'
                control={control}
                defaultValue=''
            />

            <input type='submit' />
        </form>
    )
}

export default CreateStockForm
