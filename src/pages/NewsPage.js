import React from 'react';
import { useParams } from 'react-router-dom';
import NewsDetails from '../components/NewsDetails';
import newsData from '../api/fetchData'; // Importe os dados das notícias

function NewsPage() {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h2>Detalhes da Notícia</h2>
      {news ? <NewsDetails news={news} /> : <p>Notícia não encontrada</p>}
    </div>
  );
}

export default NewsPage;
