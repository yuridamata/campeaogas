import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer(){
  return <footer>
    <div className={styles.footer}>
      <div className={styles.informacoes}>
        <Image src="/../public/logo-branca.png" alt="Logo Grupo Campeão Gás" width="333" height="72" />
        <h3>Contato</h3>
        <p>Horário de Funcionamento</p>  
        <p>Segunda a Sábado - Das 07h às 21h</p>
        <p>Domingos e Feriados - Das 07h às 16h</p>

        <h6>Tele-Entrega & Atendimento - (61) 3888.8888</h6>

        <p>WhatsApp - (61) 98888.8888</p>
      </div>
      <div className={styles.formulario} id="contato">
        <form method="">
          <input type="text" name="nome" id="nome" placeholder="Nome" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <textarea name="mensagem" id="mensagem" cols={20} rows={4} placeholder="Mensagem" />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  </footer>
}