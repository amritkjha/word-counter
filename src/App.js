import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = "#800080"
      document.title = "TextUtils (Dark)"
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.title = "TextUtils (Light)"
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert mode={mode} />
    <div className="App">
      <Switch>
        <Route exact path="/">
          <TextForm heading="Text Area" mode={mode} />
        </Route>
        <Route exact path="/about">
          <About mode={mode} />
        </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
