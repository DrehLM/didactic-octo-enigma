import { Box, Grid } from '@mui/material';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import React from 'react';

interface ListProps<Item, FormattedItem = Item> {
  items: Item[];
  formatItem?: (item: Item) => FormattedItem;
  columns: GridColumns;
  flexColumns?: boolean;
}

export function List<Item, FormattedItem = Item>({
  items,
  formatItem,
  flexColumns = true,
  ...props
}: ListProps<Item, FormattedItem>) {
  const rows = formatItem ? items.map((item) => formatItem(item)) : items;
  const columns = flexColumns
    ? props.columns.map((column) => ({ ...column, flex: 1 }))
    : props.columns;
  return (
    <Box
      sx={{
        height: '60vh',
        width: '50vw',
        m: 'auto',
        p: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              height: '60vh',
              width: '50vw',
              m: 'auto',
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              checkboxSelection
              disableSelectionOnClick
              disableColumnMenu
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default List;
