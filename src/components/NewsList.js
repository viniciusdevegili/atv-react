import React from 'react';
import '../index.css'

function NewsList({ news }) {
  return (
    <div className="news-list">
      {news.map((item, index) => (
        <div key={index} className="news-item">
          {/* Adicione a classe `news-thumbnail` à imagem */}
          <img src={item.urlToImage} alt={item.title} className="news-thumbnail" />
          <a href={item.url} className="news-link" target="_blank" rel="noopener noreferrer">{item.title}</a>
          <p className="news-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
