import Image from 'next/image';
import styles from './tiposProdutos.module.scss';

export default function TiposProdutos() {
  return (
    <section className={styles.tiposProdutos} id="produtos">
      <div className={styles.texto}>
        <h2>Feito como melhor material</h2>
        <p>
          Seja qual for a sua necessidade em casa ou na empresa, o melhor gás
          nós temos aqui.
        </p>
        <p>
          Faltou gás no seu restaurante?
          <ul>
            <li>utilize o botijão P-45 no lugar do botijão P-90 </li>
            <li>economia para um momento de aperto</li>
            <li>agilidade na instalação</li>
          </ul>
          <p>Seu gás acabou? Gás de qualidade e com procedência você encontra na campeão gás</p>
        </p>
        <button>Saiba Mais</button>
      </div>
      <div className={styles.tipos}>
        <ul>
          <li>
            <Image
              src="/tiposBotijao/p13.png"
              alt="Imagem do botijão p13"
              width="233"
              height="370"
            />
            <span>GÁS GLP P-13</span>
            <a href="#">Ver produto</a>
          </li>
          <li>
            <Image
              src="/tiposBotijao/p20.png"
              alt="Imagem do botijão p13"
              width="233"
              height="370"
            />
            <span>GÁS GLP P-20</span>
            <a href="#">Ver produto</a>
          </li>
          <li>
            <Image
              src="/tiposBotijao/p45.png"
              alt="Imagem do botijão p13"
              width="233"
              height="370"
            />
            <span>GÁS GLP P-45</span>
            <a href="#">Ver produto</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
