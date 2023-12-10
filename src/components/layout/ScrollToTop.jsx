import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Função para que, ao clicar em algum link direcionando para outra página, a exibição comece do topo. Outros trechos incluídos em index.js, na raíz do projeto

const ScrollToTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  
  export default ScrollToTop;