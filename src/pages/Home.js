import React, { useEffect, useState } from 'react';

function Home() {
  const [news, setNews] = useState([]);

  // Função para buscar notícias na API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=033a02cea8654a8fb4ab5596c389b0a1');
        const data = await response.json();
        
        // Adicionar manualmente os links de imagens às notícias da API
        const newsWithImages = data.articles.map((article, index) => {
          switch (index) {
            case 0:
              return {
                ...article,
                urlToImage: 'https://s2-g1.glbimg.com/mYujdh6WHqq2S5d2tdm6lwxt34Y=/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/H/t/G1KKcXTMqP7ZR7aF7r3Q/microexplosao-bdrg-1706.mp4-frame-30.png'
              };
            case 1:
              return {
                ...article,
                urlToImage: 'https://medias.itatiaia.com.br/dims4/default/6e349d4/2147483647/strip/true/crop/1888x1063+1+0/resize/1000x563!/format/webp/quality/90/?url=https%3A%2F%2Fk2-prod-radio-itatiaia.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fc0%2F54%2Fab60001e2121fcbf9b7d72ecbffd%2F6-046251.jpg'
              };
            case 2:
              return {
                ...article,
                urlToImage: 'https://cdn.oantagonista.com/uploads/2024/06/Principal-fonte-de-informacao-dos-jovens-sao-videos-curtos-em-redes-sociais.jpg'
              };
            case 3:
              return {
                ...article,
                urlToImage: 'https://cdn.oantagonista.com/uploads/2024/06/Principal-fonte-de-informacao-dos-jovens-sao-videos-curtos-em-redes-sociais.jpg'
              };
            case 4:
              return {
                ...article,
                urlToImage: 'https://medias.itatiaia.com.br/dims4/default/bef8ad2/2147483647/strip/true/crop/1255x707+185+460/resize/1000x563!/format/webp/quality/90/?url=https%3A%2F%2Fk2-prod-radio-itatiaia.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fff%2Fe6%2Fc58a460f42fdb000d52a5c13ad1f%2Foficialbrunoemarrone-1694209539-3187583109105118823-398130763.jpg'
              };
            case 5:
              return {
                ...article,
                urlToImage: 'https://www.infomoney.com.br/wp-content/uploads/2024/05/2024-05-08T174258Z_1_LYNXMPEK470QP_RTROPTP_4_FLUXO-CAMBIAL-SEMANAL.jpg?w=2048&quality=70&strip=all'
              };
            case 6:
              return {
                ...article,
                urlToImage: 'https://cdn.oantagonista.com/uploads/2020/07/bandeiras-pt-03-1.jpg'
              };
            case 7:
              return {
                ...article,
                urlToImage: 'https://static.poder360.com.br/2024/06/Mover-PL-RodrigoCunha-Rodrigopacheco-JaquesWagner-Senado-14-848x477.jpg'
              };
            case 8:
              return {
                ...article,
                urlToImage: 'https://s2-ge.glbimg.com/xjZFfR5Ru4hI77H9IR9bAz8kCMw=/0x0:3000x2250/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/F/i/f9CyJvRBmy0Y41b0Pccg/kaio-jorge.jpeg'
              };
            case 9:
              return {
                ...article,
                urlToImage: 'https://s2-extra.glbimg.com/OdaUJ_WNWpY1oU8byvbwmFUaJGU=/0x0:1174x690/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f551ea7087a47f39ead75f64041559a/internal_photos/bs/2024/m/W/6TS9DDT5C6BGmwfAeBeg/87570845-ri-rio-de-janeiro-rj-19-03-2020-extra-extra-morro-da-mineira-complexo-de-sao-carlos.jpg'
              };
            default:
              return {
                ...article,
                urlToImage: `https://via.placeholder.com/150?text=Imagem+${index+1}`
              };
          }
        });
        
        // Limitar para exibir apenas 10 notícias
        setNews(newsWithImages.slice(0, 10));
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', margin: '20px 0', fontFamily: 'Arial, sans-serif', color: '#333' }}>Notícias Principais</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {news.map((item, index) => (
          <div key={index} style={{ width: 'calc(25% - 10px)', marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.urlToImage} alt={item.title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
            </a>
            <div style={{ marginTop: '10px' }}>
              <a href={item.url} style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">{item.title}</a>
              <p style={{ fontSize: '1rem', color: '#666', marginTop: '5px' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
