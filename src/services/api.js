import axios from "axios";


axios.defaults.baseURL = 'https://660045b2df565f1a614608cd.mockapi.io/';

export const addMaterial = async (values) => {
    const response = await axios.post('/materials', values);
    return response.data;
}

export const getMaterials = async () => {
    const response = await axios.get('/materials');
    return response.data;
};
 
export const deleteMaterial = async (id) => {
    const response = await axios.delete(`/materials/${id}`);
    return response.data;
}


export const updateMaterials = async (fields) => {
    const response = await axios.put(`/materials/${fields.id}`, fields);
    return response.data;
}