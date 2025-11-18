// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { pricingData } from '../data/pricing';
import styles from '../styles/Pages.module.css';

export default function Programacion() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.icon}>💻</div>
          <h1>Programación Web</h1>
          <p>
            Desarrollo soluciones web con React y, cuando es necesario, 
            realizo integraciones básicas con servicios de datos como Supabase o Firebase.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {pricingData.programacion.map((service, index) => (
            <PricingCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          className={styles.info}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Stack tecnológico</h3>
          <ul>
            <li>Frontend: React, HTML5, CSS3, JavaScript/TypeScript</li>
            <li>Backend: Node.js, Express, APIs RESTful, Axios</li>
            <li>Bases de datos: Supabase, Firebase</li>
            <li>Herramientas: Git, Vite, Tailwind CSS</li>
            <li>Deploy: Vercel, Netlify, Render</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}