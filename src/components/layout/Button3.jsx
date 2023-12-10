import styles from "./Button3.module.css";
import { Link } from "react-router-dom";

// Função para criação de botão que aparece no footer

function Button({ to, text }) {
  return (
    <div className={styles.btn}>
      <Link className={styles.btn3} to={to}>
        {text}
      </Link>
    </div>
  );
}

export default Button;
