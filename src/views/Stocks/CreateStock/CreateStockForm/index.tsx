import React from 'react'
import { Input } from 'components'
import { useForm, Controller } from 'react-hook-form'
import './index.scss'
import UploadFile from '../UploadFile'

interface IFormInput {
    description: string
    lastName: string
    age: string
    grow: string
    throw: string
}

const inputData = [
    {
        key: 'description',
        label: 'Описание',
    },
    {
        key: 'group',
        label: 'Группа',
    },
    {
        key: 'country',
        label: 'Страна',
    },
    {
        key: 'brand',
        label: 'Бренд',
    },
    {
        key: 'article',
        label: 'Артикул',
    },
    {
        key: 'code',
        label: 'Код',
    },
    {
        key: 'foreignCode',
        label: 'Внешний код',
    },
    {
        key: 'count',
        label: 'Ед. измерения',
    },
    {
        key: 'weight',
        label: 'Вес',
    },
    {
        key: 'width',
        label: 'Ширина',
    },
    {
        key: 'height',
        label: 'Высота',
    },
    {
        key: 'length',
        label: 'Длина',
    },
    {
        key: 'volume',
        label: 'Объем',
    },
]

interface CreateStockFormProps {
    submitRef: any
}

const CreateStockForm = ({ submitRef }: CreateStockFormProps) => {
    const { control, handleSubmit } = useForm<IFormInput>()

    const onSubmit = (data: IFormInput) => {
        alert(JSON.stringify(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className='container'>
                <div className='container-form'>
                <UploadFile />
                    {inputData.map(({ label, key }) => (
                        <Controller
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    label={label}
                                    className='form-input'
                                />
                            )}
                            key={key}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            name={key}
                            control={control}
                            defaultValue=''
                        />
                    ))}
                </div>
                <div className='container-tabs'>
                    dasdasd
                </div>
            </div>
            <button type='submit' ref={submitRef} />
        </form>
    )
}

export default CreateStockForm
