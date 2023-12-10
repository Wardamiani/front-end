import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";
import image1 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imgqueijos/1.jpg";
import image2 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imgqueijos/2.jpg";
import image3 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imgqueijos/3.jpg";
import image4 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imgqueijos/4.jpg";
import image5 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imgqueijos/5.jpg";
import image6 from "/Users/wesleydamiani/Projeto_Front_End/front-end/src/img/imgqueijos/6.jpg";
import flecha from "../../img/vectorflecha.png"

// Função para criação do carrossel que aparece na página de produtos


const images = [image1, image2, image3, image4, image5, image6];

function Carousequeijos() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <section className={styles.bloco}>
      <h2 className={styles.titulos}>Queijos para todos os gostos!</h2>      
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
        Sabores que encantam, texturas que surpreendem. Explore a excelência dos nossos queijos e transforme cada momento em uma experiência gourmet inesquecível. Permita-se o prazer do verdadeiro sabor.
      </p>
    </section>
  );
}

export default Carousequeijos;
