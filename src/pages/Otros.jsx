// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { pricingData } from '../data/pricing';
import styles from '../styles/Pages.module.css';

export default function Otros() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.icon}>⚡</div>
          <h1>Otros Servicios</h1>
          <p>
            Disponibilidad de modalidades flexibles para proyectos 
            particulares o entregas rápidas, según las necesidades del encargo.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {pricingData.otros.map((service, index) => (
            <PricingCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          className={styles.info}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Información importante</h3>
          <ul>
            <li>La tarifa por hora aplica a proyectos personalizados o consultorías</li>
            <li>El recargo por urgencia varía según el tiempo de entrega</li>
            <li>Todos los precios son en pesos colombianos (COP)</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}