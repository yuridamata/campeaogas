import Image from "next/image";
import styles from './Produto.module.scss'

type ProdutoProps = {
    nome: string;
    preco: string;
    src: string;
    alt: string;
    url: string;
}

export default function Produto({nome, preco, src, alt, url}: ProdutoProps) {
    return <div className={styles.cardProduto}>
        <Image className={styles.imagem} src={src} alt={alt} width={345} height={345} />
        <span className={styles.nome}>{nome}</span>
        <span className={styles.preco}>{preco}</span>
        <a href={url} className={styles.button}>Comprar</a>
    </div>
}