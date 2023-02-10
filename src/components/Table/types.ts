export type Person = {
    name: string
    priceSpend: string
    priceBuy: string
    code: number
    city: string
    state: string
    btn?: string
    idProduct: string
}

export const data = [
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceBuy: 'California',
        priceSpend: 'California',
        btn: '',
        idProduct: '1',
    },
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceBuy: 'California',
        priceSpend: 'California',
        btn: '',
        idProduct: '2',
    },
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceBuy: 'California',
        priceSpend: 'California',
        btn: '',
        idProduct: '3',
    },
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceBuy: 'California',
        priceSpend: 'California',
        btn: '',        
        idProduct: '4',
    },
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceBuy: 'California',
        priceSpend: 'California',
        btn: '',
        idProduct: '5',
    },
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceBuy: 'California',
        priceSpend: 'California',
        btn: '',
        idProduct: '5',
    },
]

export const citiesList = [
    'San Francisco',
    'Richmond',
    'Riverside',
    'Los Angeles',
    'Blacksburg',
    'New York',
]

export const usStateList = [
    'California',
    'Virginia',
    'South Carolina',
    'New York',
    'Texas',
]

const enableEditing = true
const enableStickyHeader = true
const rowCount = 30

export const tableProps = {
    enableStickyHeader,
    enableEditing,
    rowCount,
}
