import React, { FC, useMemo } from 'react';
// eslint-disable-next-line camelcase
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { citiesList, data, Person, usStateList } from './makeData';

const Example: FC = () => {
  // eslint-disable-next-line camelcase
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        header: 'Account Status',
        accessorFn: (originalRow: any) => (originalRow.isActive ? 'true' : 'false'), 
        id: 'isActive',
        filterVariant: 'checkbox',
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
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      rowCount={30}
      initialState={{ showColumnFilters: true }}
    />
  );
};

export default Example;
