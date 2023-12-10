import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../img/logo2.png'

// Função para criação da navbar que aparece nas três páginas, linkando para cada uma delas

function Navbar() {

    return (   
    <nav className={styles.navbar}>
      <Link to='/'>
        <img className={styles.logo2} src={logo} alt="Blueberry Bakery" />
      </Link>
        <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/produtos">Pães</Link>
        </li>
        <li className={styles.item}>
          <Link to="/patisserie">Pâtisseries</Link>
        </li> 
      </ul>
    </nav>  
    )

}

export default Navbar;