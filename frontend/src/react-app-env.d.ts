/// <reference types="react-scripts" />

type Paginated<T> = {
  total: number;
  limit: number;
  skip: number;
  data: T[];
};

type Tag = {
  id?: number;
  tag: string;
};
