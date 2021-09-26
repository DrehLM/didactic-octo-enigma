import { Box, Grid, Typography } from '@mui/material';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import React from 'react';

interface ListProps<T, S = T> {
  title: string;
  items: T[];
  formatItem?: (item: T) => S;
  columns: GridColumns;
}

export function List<T, S = T>({
  title,
  items,
  formatItem,
  columns
}: ListProps<T, S>) {
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
          <Typography variant="h4">{title}</Typography>
        </Grid>
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
