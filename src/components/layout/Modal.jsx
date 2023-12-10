import React, { useState } from 'react';
import styles from './Modal.module.css';
import logo from '../../img/logo2.png'

// Função para criação do modal que aparece nos cards e em botões no topo das páginas de produtos e patisserie. Exibe mensagem de contato
// Uso de hooks para o modal
function Modal({ modalinfo }) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal')
    } 

    return (
        <section>
        <button 
        onClick={toggleModal}
        className={styles.btnmodal}>
            Encomendar
        </button>     
        {modal && (
            <div className={styles.modal}>
            <div onClick={toggleModal} 
            className={styles.overlay}></div>
            <div className={styles.modalcontent}>
            <img className={styles.logo2} src={logo} alt="Blueberry Bakery" />
                <p className={styles.modalparag}>Entre em contato de segunda a sábado, entre 9h e 17h, para realizar a encomenda. <br></br> (11) 97534-7607 / (11) 4556-9823</p>
                <button className={styles.closemodal}
                onClick={toggleModal}
                >Fechar</button>
            </div>
        </div>
        )}
        
    </section>
    )
}

export default Modal;