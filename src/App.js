import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsList from './components/NewsList';
import Home from './pages/Home';
import Formulario from './components/Formulario'; // Importe o componente Formulario
import { fetchTopHeadlines, fetchNewsByCategory } from './api/api'; // Importando as funções de requisição
import './index.css';

function App() {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  // Adicione mais estados de notícias para outras categorias, se desejar

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Obtém as principais manchetes
        const topHeadlinesData = await fetchTopHeadlines();
        setTopHeadlines(topHeadlinesData.articles);

        // Obtém notícias de negócios
        const businessNewsData = await fetchNewsByCategory('business');
        setBusinessNews(businessNewsData.articles);

        // Adicione mais chamadas para outras categorias, se desejar
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Passa as notícias como propriedades para o componente NewsList */}
          <Route path="/top-headlines" element={<NewsList news={topHeadlines} />} />
          <Route path="/business-news" element={<NewsList news={businessNews} />} />
          {/* Adicione mais rotas para outras categorias de notícias, se desejar */}
          <Route path="/formulario" element={<Formulario />} /> {/* Adicione a rota para o componente Formulario */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
