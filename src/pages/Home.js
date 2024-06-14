import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Home.css';

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'br',
            apiKey: '033a02cea8654a8fb4ab5596c389b0a1'
          }
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Notícias Principais</h2>
      <div className="news-container">
        {news.map((item, index) => (
          <div key={index} className="news-card">
            <img src={item.urlToImage} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">Leia mais</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
