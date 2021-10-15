import { GridColumns } from '@mui/x-data-grid';
import React from 'react';
import { List } from '../List';

interface PublicacoesListProps {
  items: Publicacao[];
}

const columns: GridColumns = [
  {
    field: 'titulo',
    headerName: 'Título',
  },
  {
    field: 'trilhaId',
    headerName: 'Trilha',
  },
  {
    field: 'edicaoId',
    headerName: 'Edição',
  },
];

const formatItem = (publicacao: Publicacao) => {
  return {
    id: publicacao.id,
    titulo: publicacao.titulo,
    trilhaId: publicacao.trilhaId,
    edicaoId: publicacao.edicaoId,
  };
};

export function PublicacoessList({ items }: PublicacoesListProps) {
  return <List items={items} formatItem={formatItem} columns={columns} />;
}

export default PublicacoessList;
