import api from './api';

const shagunService = {
  getShaguns: async () => {
    return await api.get('/shaguns');
  },
  createShagun: async (shagunData) => {
    return await api.post('/shaguns', shagunData);
  },
  updateShagun: async (id, shagunData) => {
    return await api.put(`/shaguns/${id}`, shagunData);
  },
  deleteShagun: async (id) => {
    return await api.delete(`/shaguns/${id}`);
  },
};

export default shagunService;
