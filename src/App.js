import './App.css';
import Header from './compnent/Header';
import Intro from './compnent/Intro';
import Stacks from './compnent/Stacks';
import Project from './compnent/Project';
import About from './compnent/About';
import { useRef } from 'react';

function App() {
  const scrollRef = useRef([]);

  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Stacks />
      <Project/>
    </div>
  );
}

export default App;
