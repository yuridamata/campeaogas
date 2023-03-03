import styles from './lojas.module.scss';

export default function Lojas() {
  return (
    <section className={styles.localidades}>
      <div className={styles.container}>
        <div className={styles.texto}>
          <h2>Localidades</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles.cidades}>
            <div className={styles.coluna}>
              <ul>
                <li>
                  <a href="#">Cidade 01</a>
                </li>
                <li>
                  <a href="#">Cidade 02</a>
                </li>
                <li>
                  <a href="#">Cidade 03</a>
                </li>
                <li>
                  <a href="#">Cidade 04</a>
                </li>
                <li>
                  <a href="#">Cidade 05</a>
                </li>
                <li>
                  <a href="#">Cidade 06</a>
                </li>
                <li>
                  <a href="#">Cidade 07</a>
                </li>
                <li>
                  <a href="#">Cidade 08</a>
                </li>
              </ul>
            </div>
            <div className={styles.coluna}>
              <ul>
                <li>
                  <a href="#">Cidade 09</a>
                </li>
                <li>
                  <a href="#">Cidade 10</a>
                </li>
                <li>
                  <a href="#">Cidade 11</a>
                </li>
                <li>
                  <a href="#">Cidade 12</a>
                </li>
                <li>
                  <a href="#">Cidade 13</a>
                </li>
                <li>
                  <a href="#">Cidade 14</a>
                </li>
                <li>
                  <a href="#">Cidade 15</a>
                </li>
                <li>
                  <a href="#">Cidade 16</a>
                </li>
              </ul>
            </div>
            <div className={styles.coluna}>
              <ul>
                <li>
                  <a href="#">Cidade 01</a>
                </li>
                <li>
                  <a href="#">Cidade 02</a>
                </li>
                <li>
                  <a href="#">Cidade 03</a>
                </li>
                <li>
                  <a href="#">Cidade 04</a>
                </li>
                <li>
                  <a href="#">Cidade 05</a>
                </li>
                <li>
                  <a href="#">Cidade 06</a>
                </li>
                <li>
                  <a href="#">Cidade 07</a>
                </li>
                <li>
                  <a href="#">Cidade 08</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.mapa}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.714222917934!2d-48.1054557!3d-15.924035700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bd3868831bfc3%3A0x10f0d4fd61f9fdc8!2zQ2FtcGXDo28gR8Ohcw!5e0!3m2!1sen!2sbr!4v1677805022980!5m2!1sen!2sbr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
