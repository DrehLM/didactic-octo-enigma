import { GridColumns } from '@mui/x-data-grid';
import React from 'react';
import { List } from '../List';

interface Autor {
  academicoId: number;
  academico: {
    id: number;
    nome: string;
  };
  genero: string;
}

const autores: Autor[] = [
  {
    academicoId: 1,
    academico: {
      id: 1,
      nome: 'Gustavinho'
    },
    genero: 'so'
  },
  {
    academicoId: 2,
    academico: {
      id: 2,
      nome: 'Ronaldo'
    },
    genero: 'sidade'
  }
];

const columns: GridColumns = [
  {
    field: 'nome',
    headerName: 'Nome'
  },
  {
    field: 'genero',
    headerName: 'Gênero'
  }
];

const formatItem = (autor: Autor) => {
  return {
    id: autor.academicoId,
    nome: autor.academico.nome,
    genero: autor.genero
  };
};

export function AutoresList() {
  return (
    <List
      title="Autores"
      items={autores}
      formatItem={formatItem}
      columns={columns}
    />
  );
}

export default AutoresList;
