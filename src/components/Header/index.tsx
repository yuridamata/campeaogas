import styles from './Header.module.scss';

export default function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src="/logoCampeaoGas.png" />
      </div>
      <ul className={styles.menu}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#quemsomos">Quem Somos</a>
        </li>
        <li>
          <a href="#produtos">Produtos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
      <button>
        <a href="#contato">Fazer Pedido</a>
      </button>
    </nav>
  );
}
