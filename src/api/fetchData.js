const fetchData = async () => {
    try {
      const response = await fetch('URL_DA_API');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  };
  
  export default fetchData;
  