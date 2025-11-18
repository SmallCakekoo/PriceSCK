// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../styles/InteractiveBackground.module.css';

const Particle = ({ mouseX, mouseY, index }) => {
  const [initialPos] = useState(() => ({
    x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
    y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1000,
  }));
  
  const x = useMotionValue(initialPos.x);
  const y = useMotionValue(initialPos.y);
  
  const springConfig = { damping: 50, stiffness: 100 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  // Calcular distancia usando un enfoque más directo
  const [distance, setDistance] = useState(1000);
  
  useEffect(() => {
    const unsubscribeX = springX.on('change', (latestX) => {
      const latestY = springY.get();
      const mx = mouseX.get();
      const my = mouseY.get();
      
      if (typeof mx === 'number' && typeof my === 'number') {
        const dist = Math.sqrt(
          Math.pow(latestX - mx, 2) + Math.pow(latestY - my, 2)
        );
        setDistance(dist);
      }
    });
    
    const unsubscribeY = springY.on('change', (latestY) => {
      const latestX = springX.get();
      const mx = mouseX.get();
      const my = mouseY.get();
      
      if (typeof mx === 'number' && typeof my === 'number') {
        const dist = Math.sqrt(
          Math.pow(latestX - mx, 2) + Math.pow(latestY - my, 2)
        );
        setDistance(dist);
      }
    });
    
    const unsubscribeMouseX = mouseX.on('change', (mx) => {
      const latestX = springX.get();
      const latestY = springY.get();
      
      if (typeof mx === 'number' && typeof mouseY.get() === 'number') {
        const my = mouseY.get();
        const dist = Math.sqrt(
          Math.pow(latestX - mx, 2) + Math.pow(latestY - my, 2)
        );
        setDistance(dist);
      }
    });
    
    const unsubscribeMouseY = mouseY.on('change', (my) => {
      const latestX = springX.get();
      const latestY = springY.get();
      
      if (typeof my === 'number' && typeof mouseX.get() === 'number') {
        const mx = mouseX.get();
        const dist = Math.sqrt(
          Math.pow(latestX - mx, 2) + Math.pow(latestY - my, 2)
        );
        setDistance(dist);
      }
    });
    
    return () => {
      unsubscribeX();
      unsubscribeY();
      unsubscribeMouseX();
      unsubscribeMouseY();
    };
  }, [springX, springY, mouseX, mouseY]);
  
  const opacity = Math.max(0.1, Math.min(0.8, 0.8 - (distance / 200) * 0.7));
  const scale = Math.max(0.5, Math.min(1.5, 1.5 - (distance / 200) * 1));
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const currentX = x.get();
      const currentY = y.get();
      const dx = e.clientX - currentX;
      const dy = e.clientY - currentY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 200) {
        const angle = Math.atan2(dy, dx);
        const force = (200 - dist) / 200;
        const newX = currentX - Math.cos(angle) * force * 30;
        const newY = currentY - Math.sin(angle) * force * 30;
        
        x.set(newX);
        y.set(newY);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);
  
  const colors = [
    'var(--aurora-purple)',
    'var(--aurora-cyan)',
    'var(--aurora-blue)',
    'var(--aurora-green)',
    'var(--aurora-pink)'
  ];
  
  const color = colors[index % colors.length];
  const size = 3 + (index % 3);
  
  return (
    <motion.div
      className={styles.particle}
      style={{
        x: springX,
        y: springY,
        opacity,
        scale,
        backgroundColor: color,
        width: size,
        height: size,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
    />
  );
};

const CursorLight = ({ mouseX, mouseY }) => {
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });
  
  const x = useTransform(springX, (value) => (typeof value === 'number' ? value : 0) - 200);
  const y = useTransform(springY, (value) => (typeof value === 'number' ? value : 0) - 200);
  
  return (
    <motion.div
      className={styles.cursorLight}
      style={{
        x,
        y,
      }}
    />
  );
};

export default function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Inicializar partículas directamente en useState
  const [particles, setParticles] = useState(() => {
    if (typeof window === 'undefined') return [];
    const particleCount = Math.min(950, Math.floor((window.innerWidth * window.innerHeight) / 8000));
    return Array.from({ length: particleCount }, (_, i) => i);
  });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    const handleResize = () => {
      const particleCount = Math.min(150, Math.floor((window.innerWidth * window.innerHeight) / 8000));
      setParticles(Array.from({ length: particleCount }, (_, i) => i));
    };
    
    // Inicializar posición del mouse en el centro
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseX, mouseY]);
  
  return (
    <div className={styles.container}>
      <CursorLight mouseX={mouseX} mouseY={mouseY} />
      {particles.map((_, index) => (
        <Particle
          key={index}
          index={index}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  );
}
