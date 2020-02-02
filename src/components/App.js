import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './App.css';
import About from './About';
import Resume from '../containers/Resume';
import Contact from './Contact';

getResumeData(){
  $.ajax({
    url:'/resumeData.json',
    dataType:'json',
    cache: false,
    success: function(data){
      this.setState({resumeData: data});
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
      alert(err);
    }
  });
}

componentDidMount(){
  this.getResumeData();
}
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
