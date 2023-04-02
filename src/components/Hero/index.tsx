import styles from "./Hero.module.scss";

export default function Hero() {
  return <section className={styles.heroSection} id="home">
    <div className={styles.text} >
      <h2>Qualidade e segurança</h2>
      <h1>Somos a Campeão gás</h1>
      <p>
      O grupo Campeão Gás conta com um produtos de qualidade e profissionais experientes para melhor atendê-lo.      </p>
      <button>
        Saiba Mais
      </button>
    </div>
  </section>
}