import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About/index.js';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
