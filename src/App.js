import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useHistory } from 'react-router-dom'; // Importe useHistory
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import Formulario from './components/Formulario';

function App() {
  const [formData, setFormData] = useState(null);
  const history = useHistory(); // Obtenha a função de histórico

  const handleFormSubmit = (data) => {
    setFormData(data);
    history.push('/news'); // Redirecione para a página de notícias após o envio do formulário
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home onFormSubmit={handleFormSubmit} />} />
        <Route path="/news" element={<NewsPage formData={formData} />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
