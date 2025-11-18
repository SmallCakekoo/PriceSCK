// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { pricingData } from '../data/pricing';
import styles from '../styles/Pages.module.css';

export default function Photoshop() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.icon}>📸</div>
          <h1>Photoshop</h1>
          <p>
            Optimiza tus imágenes con edición profesional. Realizo desde correcciones esenciales hasta 
            fotomanipulaciones avanzadas orientadas a la creación de composiciones visuales.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {pricingData.photoshop.map((service, index) => (
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
            <li>Entrega en alta resolución + archivo editable</li>
            <li>Revisiones hasta que quedes satisfecho</li>
            <li>Formatos optimizados para web y redes sociales</li>
            <li>Servicio de urgencia disponible con recargo</li>
            <li>Asesoría personalizada durante todo el proceso</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}