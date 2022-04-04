//import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Pagecontent from './components/PageContent';
import RandomGif from './components/RandomGif'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Pagecontent/>
      <RandomGif/>
    </div>
  );
}

export default App;
