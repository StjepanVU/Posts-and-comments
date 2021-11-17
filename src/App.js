import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import ContentBox from './components/ContentBox';
import react from 'react';

class App extends react.Component {

  render() {
      return (
        <main>
          <Header/>
          <Container/>
        </main>
    )
  }
}

export default App;
