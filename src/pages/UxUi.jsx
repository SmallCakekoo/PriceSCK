// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { pricingData } from '../data/pricing';
import styles from '../styles/Pages.module.css';

export default function UxUi() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.icon}>🎨</div>
          <h1>UX/UI Design</h1>
          <p>
            Diseño de interfaces centradas en el usuario. Desde wireframes hasta prototipos
            interactivos con sistemas de diseño completos y alta fidelidad.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {pricingData.uxui.map((service, index) => (
            <PricingCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          className={styles.info}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3>¿Qué incluyen estos servicios?</h3>
          <ul>
          <li>Investigación ligera de usuarios y competencia (depende del proyecto)</li>
          <li>Trabajo 100% en Figma: diseño, prototipado, componentes y responsive. 
          (No uso Adobe XD ni otras herramientas.)</li>
          <li>Reparación de archivos: limpieza de capas, orden visual, autolayout, 
          estilos y microinteracciones para dejarlo profesional y consistente.</li>
          <li>Diseño visual en Figma: colores, tipografías y componentes reutilizables. Tokens de ser necesarios.</li>
          <li>Entrega con documentación esencial y guía de uso del diseño</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}