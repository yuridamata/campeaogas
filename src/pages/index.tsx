import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import QuemSomos from '@/components/QuemSomos'
import Caracteristicas from '@/components/Caracteristicas'
import TiposProdutos from '@/components/TiposProduto'
import Promocao from '@/components/Promocao'
import MaisProdutos from '@/components/MaisProdutos'
import Lojas from '@/components/Lojas'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Campeão Gás</title>
        <meta name="description" content="Website da empresa: Campeão Gás" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Hero />
        <QuemSomos />
         <TiposProdutos />
        {/*<Caracteristicas />
        <Promocao />
        <MaisProdutos />
        <Lojas />
        <Footer /> */}
      </main>
    </>
  )
}
