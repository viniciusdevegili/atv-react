import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsDetails from '../components/NewsDetails';
import axiosData from '../api/axiosData'; // Importe a função axiosData

function NewsPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axiosData();
      const foundNews = data.find(item => item.id === parseInt(id));
      setNews(foundNews);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h2>Detalhes da Notícia</h2>
      {news ? <NewsDetails news={news} /> : <p>Notícia não encontrada</p>}
    </div>
  );
}

export default NewsPage;
