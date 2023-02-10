import React, { useMemo, useState } from 'react'
import MaterialReactTable, {
    MaterialReactTableProps,
    MRT_ColumnDef as mrtColumnDef,
} from 'material-react-table'
import { Button } from '@mui/material'
import { data, Person, tableProps } from './types'
import { Link, useParams } from 'react-router-dom'

const Table = () => {
    const sendEmail = ({ idProduct }: any) => {
        console.log('click', idProduct)
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
                header: 'Остатки',
                filterVariant: 'text',
                size: 50,
            },
            {
                accessorKey: 'priceSpend',
                header: 'Цена закупки',
                size: 40,
                filterVariant: 'text',
            },
            {
                accessorKey: 'priceBuy',
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
                    <Link
                        to={`/stock/${row.original.idProduct}`}
                        onClick={(e) => sendEmail(row.original)}
                    >
                        Подробнее
                    </Link>
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
