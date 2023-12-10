import styles from "./Produtos.module.css";
import logo from "../img/logo.png";
import Produtos from "../components/layout/Produtoscard";
import Modal from '../components/layout/Modal';
import Carousequeijos from "../components/layout/Carrosselqueijos";
import Intervalopagina from "../components/layout/Intervalopagina";


function Paes() {
    return (
        <section>
            <div className={styles.background}>
            <img className={styles.logo} src={logo} alt="Blueberry Bakery" />
            <h1 className={styles.titulo_principal}>
            Sabores que inspiram, pães que encantam
            </h1>
            <p className={styles.parag}>
          <i><span>
             Delicie-se com o sabor artesanal em cada pedaço. Na nossa loja de pães, transformamos ingredientes em experiências irresistíveis.
            </span></i>
        </p>
        <p>
        <span><i>Confira a nossa seleção diversa de pães e panetones artesanais!</i></span>
        </p>

        <Modal text="FAÇA SEU PEDIDO!" />
            </div>

        {/* Cards de pães sendo requisitado */}

        <Produtos /> 

        {/* Módulo de carrossel de queijos sendo requisitado */}

        <Carousequeijos />

        {/* Módulo de intervalo entre conteúdo e footer sendo requisitado */}

        <Intervalopagina />

        </section>

)
}    

export default Paes;