import { Heart, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import styles from '../styles/Footer.module.css';
import blackicon from "../assets/blackicon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>
               <img src={blackicon} alt="logocat" style={{ width: "28px", height: "28px", marginRight: "10px" }} />
              PriceSCK</h3>
            <p>Estoy acá para ayudarte :)</p>
          </div>

          <div className={styles.links}>
            <div className={styles.column}>
              <h4>Servicios</h4>
              <a href="/photoshop">Photoshop</a>
              <a href="/academicos">Académicos</a>
              <a href="/motion">Motion Graphics</a>
            </div>

            <div className={styles.column}>
              <h4>Más servicios</h4>
              <a href="/programacion">Programación</a>
              <a href="/uxui">UX/UI Design</a>
              <a href="/contacto">Contacto</a>
            </div>

            <div className={styles.column}>
              <h4>Conecta</h4>
                 <p>Contactame acá :)</p>
              <div className={styles.social}>
                <a href="https://github.com/SmallCakekoo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/sary-fernanda-payan-bastidas-1a6242283/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/scakeko/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="mailto:payan.sary@gmail.com" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} PriceSCK. Hecho con <Heart size={16} className={styles.heart} /> y código, VAMOSSS.
          </p>
        </div>
      </div>
    </footer>
  );
}