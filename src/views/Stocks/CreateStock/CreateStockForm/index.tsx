import React from 'react'
import { Input } from 'components'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import UploadFile from '../UploadFile'
import './index.scss'

interface IFormInput {
    description: string
    lastName: string
    age: string
    grow: string
    throw: string
}

const inputData = [
    {
        key: 'group',
        label: 'Группа',
        type: 'select',
    },
    {
        key: 'country',
        label: 'Страна',
        type: 'select',
    },
    {
        key: 'brand',
        label: 'Бренд',
        type: 'input',
    },
    {
        key: 'article',
        label: 'Артикул',
        type: 'input',
    },
    {
        key: 'code',
        label: 'Код',
        type: 'number',
    },
    {
        key: 'foreignCode',
        label: 'Внешний код',
        type: 'input',
    },
    {
        key: 'count',
        label: 'Ед. измерения',
        type: 'select',
    },
    {
        key: 'weight',
        label: 'Вес',
        type: 'number',
    },
    {
        key: 'width',
        label: 'Ширина',
        type: 'number',
    },
    {
        key: 'height',
        label: 'Высота',
        type: 'number',
    },
    {
        key: 'length',
        label: 'Длина',
        type: 'number',
    },
    {
        key: 'volume',
        label: 'Объем',
        type: 'number',
    },
]

interface CreateStockFormProps {
    submitRef: any
}

const CreateStockForm = ({ submitRef }: CreateStockFormProps) => {
    const { control, handleSubmit } = useForm<IFormInput>()
    const [age, setAge] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value)
    }

    const onSubmit = (data: IFormInput) => {
        alert(JSON.stringify(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className='container'>
                <div className='container-form'>
                    <UploadFile />
                    <Controller
                        render={() => (
                            <TextField
                                multiline
                                className='textarea'
                                label='Описание'
                                size='small'
                            />
                        )}
                        key='description'
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        name='description'
                        control={control}
                        defaultValue=''
                    />
                    {inputData.map(({ label, key, type }) => (
                        <>
                            {type === 'select' ? (
                                <FormControl
                                    size='small'
                                    className='select-input'
                                >
                                    <InputLabel id='demo-select-small'>
                                        {label}
                                    </InputLabel>
                                    <Select
                                        labelId='demo-select-small'
                                        id='demo-select-small'
                                        value={age}
                                        label={label}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            ) : (
                                <Controller
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            label={label}
                                            type={type}
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
                            )}
                        </>
                    ))}
                </div>
                <div className='container-tabs'>dasdasd</div>
            </div>
            <button type='submit' ref={submitRef} />
        </form>
    )
}

export default CreateStockForm
