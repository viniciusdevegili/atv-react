import axios from 'axios';

const API_KEY = '033a02cea8654a8fb4ab5596c389b0a1'; // Adicione sua chave de API aqui

export const fetchTopHeadlines = async () => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'br',
        apiKey: API_KEY // Use a chave de API aqui
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter as principais manchetes:', error);
    throw error;
  }
};

export const fetchNewsByCategory = async (category) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'br',
        category: category,
        apiKey: API_KEY // Use a chave de API aqui
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter notícias da categoria ${category}:`, error);
    throw error;
  }
};
