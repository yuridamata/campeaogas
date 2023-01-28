import styles from "./QuemSomos.module.scss";

export default function QuemSomos(){
  return <section className={styles.quemSomos}>
    <div className={styles.textoWrapper}>
      <h2>Lorem ipsum dolor sit amet,</h2>
      <h1>Quem Somos</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla congue, auctor euismod orci. Cras ornare diam vel leo hendrerit sollicitudin. Nam nec sollicitudin quam. Donec ac purus et arcu pharetra elementum. Aliquam tempus eleifend ligula id finibus.
      </p>
    </div>
    <button>
      Saiba Mais
    </button>
  </section>
}