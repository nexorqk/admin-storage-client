import React from 'react'
import { Input } from 'components'
import { useForm, Controller } from 'react-hook-form'
import UploadFilePage from './UploadFilePage'

import styles from './StocksFormPage.module.scss'
import { Link } from 'react-router-dom'
import { ButtonBase } from '@mui/material'

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

// interface CreateStockFormProps {}

const StocksFormPage = () => {
    const { control, handleSubmit } = useForm<IFormInput>()

    const onSubmit = (data: IFormInput) => {
        alert(JSON.stringify(data))
    }

    return (
        <div className={styles.wrapper}>
            <ButtonBase>
                <Link to='/stocks'>Назад</Link>
            </ButtonBase>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <div className={styles.container}>
                    <div className={styles.containerForm}>
                        <UploadFilePage />
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
                    <div className={styles.containerTabs}>dasdasd</div>
                </div>
                <button type='submit'>Ok</button>
            </form>
        </div>
    )
}

export default StocksFormPage
