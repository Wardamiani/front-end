import styles from "./Footer.module.css";
import Button from "./Button3";

// função para criação do footer, incluíndo campos de preenchimento, e chamando componente Button3 

function Footer() {
  return (
    <footer id="footer" className={styles.contato}>
      <h2 className={styles.titulos}>Mantenha contato!</h2>
      <p className={styles.descricao3}>
        Tem alguma dúvida? Estamos sempre aqui para dar uma mãozinha. O horário
        da equipe de atendimento ao consumidor é de segunda a sábado, das 9h às
        17h. <br /> <br /> (11) 97534-7607 / (11) 4556-9823
      </p>

      <div className={styles.formgroup}>
        <form>
          <label></label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
          <textarea
            name="message"
            placeholder="Escreva a sua mensagem"
            required
          ></textarea>
          <Button className={styles.btnblack} to="" text="Enviar mensagem" />
        </form>
      </div>
    </footer>
  );
}

export default Footer;
