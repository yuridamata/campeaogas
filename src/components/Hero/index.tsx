import styles from "./Hero.module.scss";

export default function Hero() {
  return <section className={styles.heroSection}>
    <div className={styles.text} >
      <h2>Lorem ipsum dolor sit amet, </h2>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla congue, auctor euismod orci. Cras ornare diam vel leo hendrerit sollicitudin. Nam nec sollicitudin quam. Donec ac purus et arcu pharetra elementum. Aliquam tempus eleifend ligula id finibus.
      </p>
      <button>
        Saiba Mais
      </button>
    </div>
  </section>
}