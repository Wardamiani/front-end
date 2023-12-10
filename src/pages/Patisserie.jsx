import styles from "./Patisserie.module.css";
import logo from "../img/logo.png";
import Produtos from "../components/layout/Produtospatisserie";
import Modal from '../components/layout/Modal';
import Carousel from "../components/layout/Carousel";
import Intervalopagina from "../components/layout/Intervalopagina";
import livro from "../img/livropatisserie.jpg";

function Patisserie() {
    return (
        <section>
            <div className={styles.background}>
            <img className={styles.logo} src={logo} alt="Blueberry Bakery" />
            <h1 className={styles.titulo_principal}>
            Um toque clássico
            </h1>
            <p className={styles.parag}>
          <i><span>
          Da seleção dos ingredientes de alta qualidade até a meticulosa preparação, cada detalhe carrega amor e dedicação. Nossos confeiteiros são artesãos que transformam farinha, açúcar e ovos em obras-primas.
            </span></i>
        </p>

        {/* Modal sendo requisitado em botão no início da página */}

        <Modal />
            </div>

        {/* Módulo de carrossel de patisserie sendo requisitado */}

        <Carousel />

        {/* Cards de patisseries sendo requisitado */}

        <Produtos /> 

        <h3 className={styles.descricao2}>
        Leve a confeitaria francesa para a sua casa com um manual de receitas exclusivo. Entre em contato para adquirir com um preço especial para clientes.
        </h3>  

        <img
        className={styles.livro} src={livro}    
        alt="Blueberry Bakery"
      />

      {/* Módulo de intervalo entre conteúdo e footer sendo requisitado */}

        <Intervalopagina />

        </section>
)
}

export default Patisserie;