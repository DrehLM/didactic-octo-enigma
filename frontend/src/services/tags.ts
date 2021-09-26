import api from './api';

const tags = {
  find: async (tag: Partial<Tag>) => {
    const response = await api.get<Paginated<Tag>>('/tags', tag);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },

  create: async (tag: Tag) => {
    const response = await api.post('/tags', tag);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },

  remove: async (id: number) => {
    const response = await api.delete(`/tags/${id}`);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },

  update: async (tag: Tag) => {
    const response = await api.delete(`/tags/${tag.id}`, tag);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },
};

export default tags;
