import styles from "./QuemSomos.module.scss";

export default function QuemSomos(){
  return <section className={styles.quemSomos}>
    <div className={styles.textoWrapper}>
      <h2>Por que escolher a campeão gás?</h2>
      <h1>Quem Somos</h1>
      <p>
      A Campeão Gás representa a Nacional Gás na venda e comercialização de GLP – Gás Liquefeito de Petróleo e é referência em segurança. Com frota própria, a Campeão Gás entrega buscando a eficácia e agilidade no atendimento dos seus clientes.</p>
      <p>Nosso maior orgulho é fazer parte do seu dia-a-dia e estar perto da sua família. Seguimos também com ética e respeito na relação com os concorrentes e parceiros, e valorizamos nossos funcionários.</p>
    </div>
    <button>
      Saiba Mais
    </button>
  </section>
}