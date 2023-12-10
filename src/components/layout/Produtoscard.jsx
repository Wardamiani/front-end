import styles from "./Produtos.module.css";
import Card from "./Card";
import { useEffect, useState } from "react";

// Função para pegar as informações do paes.json e inclui-las nos cards da página de produtos
// Uso de hooks para a função

function Produtos() {

  const [ repositories, setRepositories] = useState([])

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch ("../../paes.json")
      const dados = await response.json()
      setRepositories(dados)
    }
    buscarRepositorios()
  }, [])

  return (
    <section className={styles.modulo}>
      <div className={styles.produtos}>
      <hr className={styles.hr} />
        <h2 className={styles.titulos}>Pães artesanais</h2>
        <h3 className={styles.descricao2}>
        Bem-vindo à nossa fábrica de pães, onde a tradição encontra a inovação. Aqui, cada pão é cuidadosamente preparado com ingredientes de alta qualidade, resultando em uma explosão de sabores autênticos. 
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
