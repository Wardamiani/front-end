import styles from "./Button.module.css";
import { Link } from "react-router-dom";

// Função para criação de botão que aparece no topo da home


function Button({ to, text }) {
  return (
    <div>
        <Link className={styles.btn} to={to}>
          <img src={text} alt="" />
          {text}
        </Link>
    </div>
  );
}

export default Button;
