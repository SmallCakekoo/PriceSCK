// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Calendar, Clock } from 'lucide-react';
import styles from '../styles/Pages.module.css';

export default function Contacto() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.icon}>✉️</div>
          <h1>¿Hablamos?</h1>
          <p>
            Cuéntame sobre tu proyecto y trabajemos juntos para hacerlo realidad.
            Respondo en menos de 48 horas si no me ha comido un gato.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <motion.div
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Mail size={40} style={{ color: 'var(--aurora-purple)', marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>Email</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              payan.sary@gmail.com
            </p>
          </motion.div>

          <motion.div
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <MessageCircle size={40} style={{ color: 'var(--aurora-cyan)', marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>WhatsApp</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              +57  313 6602645
            </p>
          </motion.div>

          <motion.div
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <Calendar size={40} style={{ color: 'var(--aurora-green)', marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>Disponibilidad</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Depende, solo escribe.
            </p>
          </motion.div>

          <motion.div
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <Clock size={40} style={{ color: 'var(--aurora-pink)', marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '0.5rem' }}>Respuesta</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Menos de 48 horas
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.info}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3>¿Cómo trabajamos?</h3>
          <ul>
            <li>Conversación inicial gratuita para entender tu proyecto</li>
            <li>Cotización personalizada según tus necesidades</li>
            <li>Revisiones hasta que quedes 100% satisfecho</li>
            <li>Soporte post-entrega para cualquier ajuste tiene un cargo extra :) del 5% sobre la tarifa base</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}