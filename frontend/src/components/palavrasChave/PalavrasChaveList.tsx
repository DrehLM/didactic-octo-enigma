import { GridColumns } from '@mui/x-data-grid';
import React from 'react';
import { List } from '../List';

interface PalavrasChaveListProps {
  items: PalavraChave[];
}

const columns: GridColumns = [
  {
    field: 'palavraChave',
    headerName: 'Palavra-chave',
  },
];

const formatItem = (palavraChave: PalavraChave) => {
  return {
    id: palavraChave.id,
    palavraChave: palavraChave.palavraChave,
  };
};

export function PalavrasChaveList({ items }: PalavrasChaveListProps) {
  return <List items={items} formatItem={formatItem} columns={columns} />;
}

export default PalavrasChaveList;
