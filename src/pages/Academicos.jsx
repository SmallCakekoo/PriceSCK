// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { pricingData } from '../data/pricing';
import styles from '../styles/Pages.module.css';

export default function Academicos() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.icon}>📚</div>
          <h1>Trabajos Académicos</h1>
          <p>
            Apoyo profesional para tus proyectos académicos. Desde correcciones hasta
            proyectos estadísticos completos con análisis de datos y presentaciones.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {pricingData.academicos.map((service, index) => (
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
            <li>Acompañamiento académico con enfoque claro y estructurado</li>
            <li>Manejo de herramientas técnicas (R, Python) cuando el proyecto lo requiere</li>
            <li>Aplicación del formato que necesites (APA, IEEE, Vancouver)</li>
            <li>Presentaciones con diseño limpio, profesional y listas para exponer</li>
            <li>Comunicación continua para ajustar, mejorar y afinar cada entrega</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}