import { useState } from 'react';
import ModalProduto from './ModalProduto';
import Image from 'next/image';
import styles from './Produto.module.scss';


type ProdutoProps = {
  nome: string;
  preco: string;
  src: string;
  alt: string;
  url: string;
  descricao: string;
  descricaoSegundoParagrafo?: string;
  descricaoTerceiroParagrafo?: string;
};

export default function Produto({
  nome,
  preco,
  src,
  alt,
  url,
  descricao,
  descricaoSegundoParagrafo,
  descricaoTerceiroParagrafo,
}: ProdutoProps) {
  const [modalAberto, setModalAberto] = useState(false);

  const openModal = () => {
    setModalAberto(true);
  };

  const closeModal = () => {
    setModalAberto(false);
  };

  return (
    <div className={styles.cardProduto}>
      <Image
        className={styles.imagem}
        src={src}
        alt={alt}
        width={345}
        height={345}
        onClick={openModal}
      />
      <span className={styles.nome}>{nome}</span>
      <span className={styles.preco}>{preco}</span>
      <button className={styles.button} onClick={openModal}>
        Saiba mais
      </button>
      {modalAberto && (
        <ModalProduto
          nome={nome}
          preco={preco}
          src={src}
          alt={alt}
          descricao={descricao}
          descricaoSegundoParagrafo={descricaoSegundoParagrafo}
          descricaoTerceiroParagrafo={descricaoTerceiroParagrafo}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
