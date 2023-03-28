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
            src="/../public/niple-redutor-v2.png"
            nome="Niple Redutor para Purificador de Água 1/2&ldquo;x3/8&ldquo; Fani"
            preco="R$ 129,99"
            descricao="Nem sempre as peças encaixam quando se trata de instalações hidráulicas. A boa notícia é que, se seu purificador de água tem uma compatibilidade diferente com o encanamento, o Niple Redutor para Purificador de Água 1/2&ldquo;x3/8&ldquo; Fani pode resolver essa questão.
            "
            descricaoSegundoParagrafo="O Niple Redutor é uma peça de adaptação. Sua função é ligar conexões fêmeas que sejam compatíveis com as bitolas 1/2x3/8&ldquo;. Ou seja, ele faz uma redução do menor para o maior ou aumenta, a depender do modelo de aparelho. A peça liga mangueiras e torneiras de todos os tipos que precisam desse pequeno ajuste no tamanho. Como a maior parte das conexões, ela é feita em latão, um metal altamente resistente ao contato direto com a água. Ele não enferruja, não libera detritos na água e não perde a capacidade de uso facilmente. Demora muito até precisar de uma troca. O produto tem a cor prata com acabamento cromado. Ele possui rosca dos dois lados e, para usar, é só encaixar, girando a peça depois de colocar no lugar correto. Não requer mão de obra especializada."
            descricaoTerceiroParagrafo="Adapta saídas diferentes de torneiras e mangueiras para um purificador de água. - Peça leve, facilitando tanto o manuseio para a instalação quanto uma possível troca. - Material resistente para uso contínuo."
            alt="Imagem do Niple Redutor"
          />
          <Produto
            url="#"
            src="/../public/porcaSextavada.png"
            nome="Porca Sextavada UNC 3/8&ldquo; - 16 Chave 9/16&ldquo; Inox 304/A2 Classe 70 Passivado"
            preco="R$ 129,99"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla congue, auctor euismod orci."
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla congue, auctor euismod orci."
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla congue, auctor euismod orci."
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla congue, auctor euismod orci."
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla congue, auctor euismod orci."
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla congue, auctor euismod orci."
            alt="Foto botijão"
          />
          <Produto
            url="#"
            src="/../public/produto-botijao.png"
            nome="GÁS GLP P-13"
            preco="R$ 129,99"
            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie ultrices imperdiet. Duis dolor Leo, sollicitudin non nulla congue, auctor euismod orci."
            alt="Foto botijão"
          />
        </div>
        <a href="#" className={styles.button}>
          Ver todos produtos
        </a>
      </div>
    </section>
  );
}
