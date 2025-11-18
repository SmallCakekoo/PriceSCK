import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import styles from '../styles/Navbar.module.css';
import blackicon from "../assets/blackicon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark';
    } catch {
      return 'dark';
    }
  });
  const location = useLocation();

  useEffect(() => {
    // Solo sincroniza el atributo del documento cuando cambie `theme`
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    try {
        localStorage.setItem('theme', newTheme);
    } catch (e) {
        console.warn('Unable to save theme to localStorage:', e);
    }
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/photoshop', label: 'Photoshop' },
    { path: '/academicos', label: 'Académicos' },
    { path: '/motion', label: 'Motion' },
    { path: '/programacion', label: 'Programación' },
    { path: '/uxui', label: 'UX/UI' },
    { path: '/contacto', label: 'Contacto' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoGradient}>
              <img src={blackicon} alt="logocat" style={{ width: "28px", height: "28px", marginRight: "10px" }} />
            PriceSCK</span>
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? styles.active : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button 
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? styles.active : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}