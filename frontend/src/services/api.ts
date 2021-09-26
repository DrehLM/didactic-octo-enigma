import { create } from 'apisauce';

export const api = create({
  baseURL: 'localhost:3030',
});

export const createService = <T>(path: string) => {
  const find = async (query: T) => {
    const response = await api.get<Paginated<T>>(path, query);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  };

  const create = async (data: T) => {
    const response = await api.post<T>(path, data);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  };

  const remove = async (id: number) => {
    const response = await api.delete<T>(`${path}/${id}`);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  };

  const update = async (id: number, data: T) => {
    const response = await api.put<T>(`${path}/${id}`, data);

    if (response.ok) {
      return response.data!;
    } else {
      throw new Error(response.originalError.message);
    }
  };

  return {
    find,
    create,
    remove,
    update,
  };
};

export default api;
