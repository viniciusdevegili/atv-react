import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; 
import descobertasCientificas from '../images/descobertas-cientificas.jpg'; // Importe a imagem

function NewsList({ news }) {
    return (
      <ul className="news-list">
        {news.map((item) => (
          <li key={item.id} className="news-item">
            <Link to={`/news/${item.id}`} className="news-link">
              <div className="news-thumbnail">
                <img src={descobertasCientificas} alt={item.title} className="news-image" width="200" height="150" />
              </div>
              <div className="news-title">{item.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

export default NewsList;
