import { Box, Grid } from '@mui/material';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import React from 'react';

interface ListProps<Item, FormattedItem = Item> {
  title: string;
  items: Item[];
  formatItem?: (item: Item) => FormattedItem;
  columns: GridColumns;
}

export function List<Item, FormattedItem = Item>({
  items,
  formatItem,
  columns
}: ListProps<Item, FormattedItem>) {
  const rows = formatItem ? items.map((item) => formatItem(item)) : items;
  return (
    <Box
      sx={{
        height: '60vh',
        width: '50vw',
        m: 'auto',
        p: 4
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              height: '60vh',
              width: '50vw',
              m: 'auto'
            }}
          >
            <DataGrid rows={rows} columns={columns} checkboxSelection />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default List;
