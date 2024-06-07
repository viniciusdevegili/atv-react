import axios from 'axios';

const axiosData = async () => {
  try {
    const response = await axios.get('URL_DA_API');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
  }
};

export default axiosData;
