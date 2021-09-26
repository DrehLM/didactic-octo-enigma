import api from './api';

const tags = {
  get: async () => {
    const response = await api.get<Paginated<Tag>>('/tags');

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  },
};

export default tags;
