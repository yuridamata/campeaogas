import Image from "next/image";
import styles from "./tiposProdutos.module.scss";

export default function TiposProdutos(){
  return <section className={styles.tiposProdutos}>
    <div className={styles.texto}>  
      <h1>
        Feito como melhor material
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla congue, auctor euismod orci. Cras ornare diam vel leo hendrerit sollicitudin. Nam nec sollicitudin quam. Donec ac purus et arcu pharetra elementum. Aliquam tempus eleifend ligula id finibus.
      </p>
      <button>
        Saiba Mais
      </button>
    </div>
    <div className={styles.tipos}>
      <Image src="/tiposBotijao/p13.png" alt="Imagem do botijão p13" width="233" height="370"/>
      <Image src="/tiposBotijao/p20.png" alt="Imagem do botijão p13" width="233" height="370"/>
      <Image src="/tiposBotijao/p45.png" alt="Imagem do botijão p13" width="233" height="370"/>
      
    </div>
  </section>
}
