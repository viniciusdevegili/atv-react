const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  };
  
  export default fetchData;
  