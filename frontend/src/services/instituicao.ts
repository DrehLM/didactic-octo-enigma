import api from './api';

const instituicoes = {
  find: async (instituicao: Partial<Instituicao>) => {
    const response = await api.get<Paginated<PalavraChave>>(
      '/instituicoes',
      instituicao
    );

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },

  create: async (instituicao: Instituicao) => {
    const response = await api.post('/instituicoes', instituicao);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },

  remove: async (id: number) => {
    const response = await api.delete(`/instituicoes/${id}`);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },

  update: async (instituicao: Instituicao) => {
    const response = await api.delete(
      `/instituicoes/${instituicao.id}`,
      instituicao
    );

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },
};

export default instituicoes;
