import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import react from 'react';

class App extends react.Component {

  render() {
    const message = "Hello from "
      return (
        <main>
          <Header message={`${message}`}/>
          <Container message={`${message}`}/>
        </main>
    )
  }
}

export default App;
