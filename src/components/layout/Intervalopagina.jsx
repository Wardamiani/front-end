import styles from "./Intervalopagina.module.css"
import imgintervalo from "../../img/imgintervalo.jpg";
import logo from '../../img/logo.png'

// Função para criação de seção que separa o footer do restante do conteúdo

function Intervalopagina() {
  return (
    <section>
      <img
        className={styles.imgintervalo}
        src={imgintervalo}
        alt="Blueberry Bakery"
      />

      <div>
        <p className={styles.descricao3}>
          Nós preparamos todos os pedidos e os enviamos à sua porta o mais
          rápido possível!
        </p>
        <img className={styles.logo_fim} src={logo} alt="Blueberry Bakery" />
      </div>
    </section>
  );
}

export default Intervalopagina;
