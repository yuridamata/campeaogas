import Image from 'next/image';
import styles from './ModalProduto.module.scss';


type ModalProdutoProps = {
  nome: string;
  preco: string;
  src: string;
  alt: string;
  descricao: string;
  descricaoSegundoParagrafo?: string;
  descricaoTerceiroParagrafo?: string;
  closeModal: () => void;
};

export default function ModalProduto({
  nome,
  preco,
  src,
  alt,
  descricao,
  descricaoSegundoParagrafo,
  descricaoTerceiroParagrafo,
  closeModal,
}: ModalProdutoProps) {

  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.modalContent} onClick={handleModalContentClick}>
        <div className={styles.modalHeader}>
          <span className={styles.modalClose} onClick={closeModal}>
            ×
          </span>
        </div>
        <div className={styles.modalBody}>
          <Image
            className={styles.imagem}
            src={src}
            alt={alt}
            width={345}
            height={345}
          />
          <span className={styles.title}>{nome}</span>
          <span className={styles.preco}>{preco}</span>
          <p className={styles.descricao}>{descricao}</p>
          {descricaoSegundoParagrafo && <p className={styles.descricao}>{descricaoSegundoParagrafo}</p>}
          {descricaoTerceiroParagrafo && <p className={styles.descricao}>{descricaoTerceiroParagrafo}</p>}
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.button} onClick={closeModal}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
