import styles from "./Card.module.css";
import Button2 from "./Button2";

// Função para criação dos cards que aparecem na home

function Card({ img, nome, descricao }) {

    
  return (
    <section className={styles.card}>
       <div>
       <a href="</Modal />" >
        <img className={styles.images} src={img} alt="Imagem"  />
      </a>
        <h3 className={styles.titulos}>{nome}</h3>
        <p className={styles.descricao}>{descricao}</p>

      {/* Componente de botão sendo chamado no card   */}

        <Button2 />

      </div>
    </section>
  );
}

export default Card;
