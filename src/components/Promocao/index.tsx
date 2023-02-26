import styles from "./promocao.module.scss";

export default function Promocao(){
  return <section>
    <div className={styles.promocao}>
      <div className={styles.imagem}></div>
      <div className={styles.textos}>
        <h2>Banner de Promoções</h2>
        <h6>Loren ipsum</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie ultrices imperdiet. </p>
        <button>Eu quero!</button>
      </div>
    </div>
  </section>
}