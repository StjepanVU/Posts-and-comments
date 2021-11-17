import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import ContentBox from './components/ContentBox';
import react from 'react';

class App extends react.Component {

  render() {
    const message = "Hello from "
    const header = "Header"
    const container = "Container"
      return (
        <main>
          <Header name={`${message} ${header}`}/>
          <Container name={`${message} ${container}`}/>
        </main>
    )
  }
}

export default App;
