/// <reference types="react-scripts" />

type Paginated<T> = {
  total: number;
  limit: number;
  skip: number;
  data: T[];
};

type Tag = {
  id: number;
  tag: string;
};

type PalavraChave = {
  id: number;
  palavraChave: string;
};

type Instituicao = {
  id: number;
  nome?: string;
  sigla?: string;
  cidade?: string;
  estado?: string;
  pais?: string;
};

type Autor = {
  academicoId: number;
  academico: {
    id: number;
    nome: string;
  };
  genero: string;
};

type Evento = {
  id: number;
  nome: string;
};
