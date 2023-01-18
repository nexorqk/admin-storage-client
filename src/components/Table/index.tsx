/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable spaced-comment */
import React, { FC, useMemo, useState } from 'react'
// eslint-disable-next-line camelcase
import MaterialReactTable, { MRT_Cell, MRT_ColumnDef } from 'material-react-table'
import { citiesList, data, Person, usStateList } from './makeData'

const Example: FC = () => {
    // eslint-disable-next-line camelcase
    const columns = useMemo<MRT_ColumnDef<Person>[]>(
        () => [
            {
                header: 'Account Status',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                accessorFn: (originalRow: any) =>
                    originalRow.isActive ? 'true' : 'false',
                id: 'isActive',
                filterVariant: 'checkbox',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                Cell: ({ cell }: any) =>
                    cell.getValue() === 'true' ? 'Active' : 'Inactive',
                size: 220,
            },
            {
                accessorKey: 'name',
                header: 'Name',
                filterVariant: 'text', // default
            },
            {
                accessorKey: 'age',
                header: 'Age',
                filterVariant: 'range',
                filterFn: 'betweenInclusive', // use betweenInclusive instead of between
            },
            {
                accessorKey: 'city',
                header: 'City',
                filterVariant: 'select',
                filterSelectOptions: citiesList,
            },
            {
                accessorKey: 'state',
                header: 'State',
                filterVariant: 'multi-select',
                filterSelectOptions: usStateList,
            },
        ],
        []
    )

    const [tableData, setTableData] = useState<Person[]>(() => data);

    // eslint-disable-next-line camelcase
    const handleSaveCell = (cell: MRT_Cell<Person>, value: any) => {
        //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here
        //@ts-ignore
        tableData[cell.row.index][cell.column.id as keyof Person] = value
        //send/receive api updates here
        setTableData([...tableData]) //re-render with new data
    }

    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            rowCount={30}
            initialState={{ showColumnFilters: true }}
            editingMode='table'
            enableEditing
            muiTableBodyCellEditTextFieldProps={({ cell }) => ({
                //onBlur is more efficient, but could use onChange instead
                onBlur: (event) => {
                    handleSaveCell(cell, event.target.value)
                },
                variant: 'outlined',
            })}
        />
    )
}

export default Example
