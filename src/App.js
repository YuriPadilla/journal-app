import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header>JOURNAL</Header>
      <Main><Form submitText="Create"></Form></Main>
      <Footer>Journal App - 2023</Footer>
    </>
  );
}

export default App;


/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/