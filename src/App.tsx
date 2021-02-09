import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DarkModeState, SetDarkModeState, useDarkMode } from './use-dark-mode';

function App() {
  const [mode, setMode] = useDarkMode();

  return (
    <div className={`mode-${mode}`}>
      <div className="container">
        <header>
          <img src={logo} className="logo" alt="logo" />
        </header>
        <main>
          <h1>React Dark Mode Example</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            harum ea iure ex aperiam corporis autem vel porro non tempora
            ratione delectus modi nihil, eius error totam cupiditate obcaecati
            pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur excepturi commodi natus totam veritatis, cumque dolorum
            perferendis, repudiandae provident ratione voluptates minus quidem
            odit aut nostrum dolorem tempora placeat ullam?
          </p>
          <DarkModeToggler mode={mode} setMode={setMode} />
        </main>
      </div>
    </div>
  );
}

function DarkModeToggler({
  mode,
  setMode,
}: {
  mode: DarkModeState;
  setMode: SetDarkModeState;
}) {
  return (
    <nav>
      <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        {mode === 'light' ? '🌒 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
}

export default App;
