// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from '../styles/Hero.module.css';
import { categories } from '../data/pricing';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Soluciones para
            <span className={styles.gradient}>proyectos</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Apoyo en proyectos académicos y no académicos, desde diseño visual
            hasta desarrollo web. Calidad, responsabilidad y tarifas claras. ;)
          </motion.p>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/photoshop" className={styles.primaryButton}>
              Ver servicios
              <ArrowRight size={20} />
            </Link>
            <Link to="/contacto" className={styles.secondaryButton}>
              Contactar
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.categories}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2>Servicios disponibles</h2>
          <div className={styles.grid}>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={`/${category.id}`} className={styles.categoryCard}>
                  <span className={styles.icon}>{category.icon}</span>
                  <span className={styles.categoryName}>{category.name}</span>
                  <ArrowRight className={styles.arrow} size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}