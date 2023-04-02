import Image from 'next/image';
import styles from './caracteristicas.module.scss';

export default function Caracteristicas() {
  return (
    <section>
      <div className={styles.caracteristicas}>
        <div className={styles.textos}>
          <h2>Porque somos campeões</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla
            congue, auctor euismod orci.
          </p>
          <ul>
            <li>
              <Image
                src="/../public/icon-entregar.png"
                alt="Ícone moto"
                width="53"
                height="37"
              />
              <h6>Entrega Rápida</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum molestie ultrices imperdiet.
              </p>
            </li>
            <li>
              <Image
                src="/../public/icon-comprar.png"
                alt="ícone carrinho de compras"
                width="42"
                height="42"
              />
              <h6>Fácil de Comprar</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum molestie ultrices imperdiet.
              </p>
            </li>
            <li>
              <Image
                src="/../public/icon-encontrar.png"
                alt="Ícone pin de localização"
                width="39"
                height="55"
              />
              <h6>Fácil de Encontrar</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum molestie ultrices imperdiet.
              </p>
            </li>
            <li>
              <Image
                src="/../public/icon-seguranca.png"
                alt="Ícone de segurança"
                width="42"
                height="52"
              />
              <h6>Segurança</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum molestie ultrices imperdiet.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.imagem}>
          <Image
            src="/../public/botijao-campeoes.png"
            alt="Imagem do botijão dentro de um círculo azul"
            width="750"
            height="750"
          />
        </div>
      </div>
    </section>
  );
}
