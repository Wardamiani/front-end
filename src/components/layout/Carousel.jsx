import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";
import image1 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imagens_carrossel/1.jpg";
import image2 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imagens_carrossel/2.jpg";
import image3 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imagens_carrossel/3.jpg";
import image4 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imagens_carrossel/4.jpg";
import image5 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imagens_carrossel/5.jpg";
import image6 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imagens_carrossel/6.jpg";
import flecha from "../../img/vectorflecha.png"

// Função para criação do carrossel que aparece na home

const images = [image1, image2, image3, image4, image5, image6];

function Carousel() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <section className={styles.bloco}>
      <h2 className={styles.titulos}>La pâtisserie française</h2>      
      <div className={styles.alinhamento}>
        <motion.div
          ref={carousel}
          className={styles.carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className={styles.inner_carousel}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((image) => (
              <motion.div className={styles.item} Key={image}>
                <img src={image} alt="Carrossel" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </div>

        {/* ícone de flecha que aparece abaixo do carrossel */}

        <img className={styles.imgflecha} src={flecha} alt="Blueberry Bakery" />

        <p className={styles.descricao2}>
        A pastelaria francesa é famosa em todo o mundo pela sua delicadeza,
        seu requinte e seu sabor memorável. Experimente alguns dos doces mais
        conhecidos e servidos em padarias e confeitarias clássicas.
      </p>
    </section>
  );
}

export default Carousel;
