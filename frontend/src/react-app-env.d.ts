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
  genero?: string;
};

type Evento = {
  id: number;
  nome: string;
};

type Edicao = {
  id: number;
  edicao?: string;
  ano?: number;
  modelo?: string;
  eventoId: number;
};

type Publicacao = {
  id: number;
  titulo?: string;
  edicaoId?: number;
  trilhaId?: number;
};

type Trilha = {
  id: number;
  trilha: string;
};
