import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './App.css';
import About from './About/About';
import Resume from '../containers/Resume';
import Contact from './Contact/Contact';
export default function App() {
  return (
    <>
      <main className={styles.App}>
        <Header />
        <Contact />
        <About />
        <Resume />
        <Footer />
      </main>
    </>
  );
}
