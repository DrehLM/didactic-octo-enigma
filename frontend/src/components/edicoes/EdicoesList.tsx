import { GridColumns } from '@mui/x-data-grid';
import React from 'react';
import { List } from '../List';

interface EdicoesListProps {
  items: Edicao[];
}

const columns: GridColumns = [
  {
    field: 'edicao',
    headerName: 'Edição'
  },
  {
    field: 'ano',
    headerName: 'Ano'
  },
  {
    field: 'modelo',
    headerName: 'Modelo'
  },
  {
    field: 'eventoId',
    headerName: 'Evento'
  },
];

const formatItem = (edicao: Edicao) => {
  return {
    id: edicao.id,
    edicao: edicao.edicao,
    ano: edicao.ano,
    modelo: edicao.modelo,
    eventoId: edicao.eventoId
  };
};

export function EdicoesList({ items }: EdicoesListProps) {
  return <List items={items} formatItem={formatItem} columns={columns} />;
}

export default EdicoesList;
