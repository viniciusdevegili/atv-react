import axios from 'axios';

const axiosData = async () => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados da API:', error);
  }
};

export default axiosData;
