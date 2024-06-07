import React, { useState } from 'react';
import Form from '../components/Form';
import fetchData from '../api/fetchData';

function Theme() {
  const [apiData, setApiData] = useState(null);

  const handleSubmit = async (formData) => {
    // Lógica para enviar o formulário
    console.log('Dados do formulário:', formData);

    // Chamada de API
    const data = await fetchData();
    setApiData(data);
  };

  return (
    <div>
      <h2>Theme Page</h2>
      <Form onSubmit={handleSubmit} />
      {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
    </div>
  );
}

export default Theme;
