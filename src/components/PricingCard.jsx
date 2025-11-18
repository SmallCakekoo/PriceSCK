// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import styles from '../styles/PricingCard.module.css';

export default function PricingCard({ service, index }) {
  return (
    <motion.div
      className={`${styles.card} ${service.popular ? styles.popular : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {service.popular && (
        <div className={styles.badge}>
          <Sparkles size={14} />
          <span>Popular</span>
        </div>
      )}

      <div className={styles.header}>
        <h3>{service.title}</h3>
        <p className={styles.description}>{service.description}</p>
      </div>

      <div className={styles.price}>
        <span className={styles.amount}>COP ${service.price}</span>
        <span className={styles.unit}>/ {service.unit}</span>
      </div>

      <ul className={styles.features}>
        {service.features.map((feature, i) => (
          <li key={i}>
            <Check size={18} className={styles.checkIcon} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {service.extras && (
        <div className={styles.extras}>
          <span className={styles.extrasLabel}>Extra:</span>
          <span>{service.extras}</span>
        </div>
      )}
    </motion.div>
  );
}