import React, { useMemo, useState } from 'react'
import MaterialReactTable, {
    MaterialReactTableProps,
    MRT_ColumnDef as mrtColumnDef,
} from 'material-react-table'
import { Button } from '@mui/material'
import { data, Person, tableProps } from './types'

const Table = () => {
    const sendEmail = (row: any) => {
        console.log('click', row)
    }

    const columns = useMemo<mrtColumnDef<Person>[]>(
        () => [
            {
                accessorKey: 'name',
                header: 'Наименование',
                size: 300,
                // default
                filterVariant: 'text', 
            },
            {
                accessorKey: 'code',
                header: 'Код',
                filterVariant: 'text',
                size: 30,
            },
            {
                accessorKey: 'city',
                header: 'Артикул',
                size: 50,
                filterVariant: 'text',
            },
            {
                accessorKey: 'state',
                header: 'Ед. изм.',
                filterVariant: 'text',
                size: 50,
            },
            {
                accessorKey: 'priceFinish',
                header: 'Цена продажи',
                size: 40,
                filterVariant: 'text',
            },
            {
                accessorKey: 'btn',
                header: '',
                size: 40,
                font: '1.2rem',
                columnDefType: 'display',
                Cell: ({ row }: any): React.ReactNode => (
                    <Button onClick={() => sendEmail(row)}>Подробнее</Button>
                ),
            },
        ],
        []
    )

    const [tableData, setTableData] = useState<Person[]>(() => data)

    const handleSaveRow: MaterialReactTableProps<Person>['onEditingRowSave'] =
        async ({ exitEditingMode, row, values }) => {
            // if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
            tableData[row.index] = values

            // send/receive api updates here
            setTableData([...tableData])
            exitEditingMode() // required to exit editing mode
        }

    return (
        <MaterialReactTable
            {...tableProps}
            columns={columns}
            data={data}
            initialState={{ showColumnFilters: true }}
            editingMode='row'
            displayColumnDefOptions={{
                'mrt-row-actions': {
                    size: 100,
                    muiTableHeadCellProps: {
                        align: 'center',
                    },
                    header: '',
                },
            }}
            onEditingRowSave={handleSaveRow}
        />
    )
}

export default Table
