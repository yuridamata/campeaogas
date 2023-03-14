import Produto from './Produto';
import styles from './maisProdutos.module.scss';

export default function MaisProdutos() {
  return (
    <section>
      <div className={styles.maisProdutos}>
        <h2 className={styles.titulo}>Mais Produtos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla
          congue, auctor euismod orci.
        </p>
        <div className={styles.produtos}>
          <Produto
            url="#"
            src="/../public/assets/images/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/assets/images/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/assets/images/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/assets/images/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/assets/images/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/assets/images/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/assets/images/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/assets/images/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            alt="Foto botijão"
          />
        </div>
        <a href="#" className={styles.button}>Ver todos produtos</a>
      </div>
    </section>
  );
}
