import styles from "./Produtos.module.css";
import Card from "./Card";
import { useEffect, useState } from "react";

// Função para pegar as informações do patisserie.json e inclui-las nos cards da página de patisserie


function Produtos() {

  const [ repositories, setRepositories] = useState([])

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch ("../../patisserie.json")
      const dados = await response.json()
      setRepositories(dados)
    }
    buscarRepositorios()
  }, [])

  return (
    <section className={styles.modulo}>
      <div className={styles.produtos}>
      <hr className={styles.hr} />
        <h2 className={styles.titulos}>Seleção especial</h2>    
        <h3 className={styles.descricao2}>
        Uma compilação única do melhor da confeitaria francesa! A França é rica em tradições doces e talentos pasteleiros que brilham em todo o mundo. Veja mais um pouco do nosso catálogo de doces clássicos.
        </h3>    

      {/* Neste trecho, o código procura quantos itens há no arquivo json para serem incluídos nos cards de forma automática */}


        {
          repositories.length > 0 ? (
            <section>
              {
              repositories.map((reposit) => (
                <Card 
                  Key={reposit.id} 
                  img={reposit.img} 
                  nome={reposit.nome} 
                  descricao={reposit.descricao} 
                                    
                />                
              ))
              }           
            </section>            
          ) : (
            <p>Carregando repositório...</p>
          )
        }        
      </div>
      <hr className={styles.hr} />
    </section>
    
  );
}

export default Produtos;
