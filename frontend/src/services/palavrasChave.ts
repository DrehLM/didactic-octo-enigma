import api from './api';

const palavrasChave = {
  find: async (palavraChave: Partial<PalavraChave>) => {
    const response = await api.get<Paginated<PalavraChave>>(
      '/palavras-chave',
      palavraChave
    );

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },

  create: async (palavraChave: PalavraChave) => {
    const response = await api.post('/palavras-chave', palavraChave);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },

  remove: async (id: number) => {
    const response = await api.delete(`/palavras-chave/${id}`);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },

  update: async (palavraChave: PalavraChave) => {
    const response = await api.delete(
      `/palavras-chave/${palavraChave.id}`,
      palavraChave
    );

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },
};

export default palavrasChave;
