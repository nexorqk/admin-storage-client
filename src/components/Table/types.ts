export type Person = {
    name: string
    priceFinish: string
    code: number
    city: string
    state: string
    btn?: string
}

export const data = [
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceFinish: 'California',
        btn: '',
    },
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceFinish: 'California',
        btn: '',
    },
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceFinish: 'California',
        btn: '',
    },
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceFinish: 'California',
        btn: '',
    },
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceFinish: 'California',
        btn: '',
    },
    {
        name: 'Tanner Linsley',
        code: 42,
        city: 'San Francisco',
        state: 'California',
        priceFinish: 'California',
        btn: '',
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
