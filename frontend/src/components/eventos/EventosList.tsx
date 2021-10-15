import { GridColumns } from '@mui/x-data-grid';
import React from 'react';
import { List } from '../List';

interface EventosListProps {
  items: Evento[];
}

const columns: GridColumns = [
  {
    field: 'nome',
    headerName: 'Nome',
  },
];

const formatItem = (evento: Evento) => {
  return {
    id: evento.id,
    nome: evento.nome,
  };
};

export function EventosList({ items }: EventosListProps) {
  return <List items={items} formatItem={formatItem} columns={columns} />;
}

export default EventosList;
