import styles from "./home.module.css";
import logo from "../img/logo.png";
import Button from "../components/layout/Button";
import Produtos from "../components/layout/Produtos";
import Carousel from "../components/layout/Carousel";
import {Link} from 'react-router-dom'
import React from 'react';
import Intervalopagina from "../components/layout/Intervalopagina";


function Home() {
  return (
    <section>
      <div className={styles.background}>
        <img className={styles.logo} src={logo} alt="Blueberry Bakery" />
        <h1 className={styles.titulo_principal}>
          Especiais para qualquer ocasião
        </h1>
        <p className={styles.parag}>
          <i><span>
            Planeje com antecedência e encomende hoje as suas sobremesas para
            entrega em até quatro dias.{" "}
            </span></i>
        </p>
        <p>
        <span><i>Confira a nossa seleção diversa de pães e panetones artesanais!</i></span>
        </p>

        {/* Botão levando para a página de produtos */}

        <Button className={styles.btnblack} to={"/produtos"} text="Descubra uma variedade de pães artesanais" />

      </div>  

        {/* Módulo de cards de produtos sendo requisitado */}

      <Produtos /> 

        {/* Módulo de carrossel de patisserie sendo requisitado */}

      <Carousel />
              
      <Link className={styles.botao} to='/patisserie'>Descubra a cultura culinária francesa!
      </Link>

      {/* Módulo de intervalo entre conteúdo e footer sendo requisitado */}

      <Intervalopagina />

    </section>
  );
}

export default Home;
