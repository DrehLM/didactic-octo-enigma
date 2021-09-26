import { GridColumns } from '@mui/x-data-grid';
import React from 'react';
import { List } from '../List';

interface AutoresListProps {
  items: Autor[];
}

const columns: GridColumns = [
  {
    field: 'nome',
    headerName: 'Nome',
  },
  {
    field: 'genero',
    headerName: 'Gênero',
  },
];

const formatItem = (autor: Autor) => {
  return {
    id: autor.academicoId,
    nome: autor.academico.nome,
    genero: autor.genero,
  };
};

export function AutoresList({ items }: AutoresListProps) {
  return (
    <List
      title="Autores"
      items={items}
      formatItem={formatItem}
      columns={columns}
    />
  );
}

export default AutoresList;
