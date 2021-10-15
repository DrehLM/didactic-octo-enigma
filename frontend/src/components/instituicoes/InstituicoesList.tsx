import { GridColumns } from '@mui/x-data-grid';
import React from 'react';
import { List } from '../List';

interface InstituicoesListProps {
  items: Instituicao[];
}

const columns: GridColumns = [
  {
    field: 'nome',
    headerName: 'Nome',
  },
  {
    field: 'sigla',
    headerName: 'Sigla',
  },
  {
    field: 'cidade',
    headerName: 'Cidade',
  },
  {
    field: 'estado',
    headerName: 'Estado',
  },
  {
    field: 'pais',
    headerName: 'País',
  },
];

const formatItem = (instituicao: Instituicao) => {
  return {
    id: instituicao.id,
    nome: instituicao.nome,
    sigla: instituicao.sigla,
    cidade: instituicao.cidade,
    estado: instituicao.estado,
    pais: instituicao.pais,
  };
};

export function InstituicoessList({ items }: InstituicoesListProps) {
  return <List items={items} formatItem={formatItem} columns={columns} />;
}

export default InstituicoessList;
