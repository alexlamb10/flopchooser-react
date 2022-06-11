import './App.css';
import { useState } from 'react';
import Top from './components/Top';
import Answer from './components/Answer';
import Movies from './components/Movies';

function App() {
  const [chosen, setChosen] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [incorrect, setIncorrect] = useState(false)
  return (
    <div className="App App-header">
      <Top />
      <Answer chosen={chosen} correct={correct} incorrect={incorrect} />
      <Movies />
    </div>
  );
}

export default App;
