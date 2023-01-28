import styles from "./Header.module.scss";

export default function Header() {
  return <nav className={styles.header}>
    <div className={styles.logoWrapper}>
      <img src="/logoCampeaoGas.png" />
    </div>
    <ul className={styles.menu}>
      <li>
        Home
      </li>
      <li>
        Quem Somos
      </li>
      <li>
        Produtos
      </li>
      <li>
        Contato
      </li>
    </ul>
    <button>
      Fazer Pedido
    </button>
  </nav>
}