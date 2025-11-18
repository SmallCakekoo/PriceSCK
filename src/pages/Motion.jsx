// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { pricingData } from '../data/pricing';
import styles from '../styles/Pages.module.css';

export default function Motion() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.icon}>🎬</div>
          <h1>Motion Graphics</h1>
          <p>
            Transformo tus conceptos en animaciones y piezas audiovisuales. 
            Realizo desde composiciones básicas hasta secuencias avanzadas con efectos y tratamiento visual.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {pricingData.motion.map((service, index) => (
            <PricingCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          className={styles.info}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Software y herramientas que utilizo</h3>
          <ul>
            <li>Adobe After Effects para motion graphics</li>
            <li>Adobe Premiere Pro para edición de video</li>
            <li>Adobe Audition para diseño de audio</li>
            <li>Entrega en múltiples formatos (MP4, MOV, GIF)</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}