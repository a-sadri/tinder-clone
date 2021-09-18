import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <TinderCards />
        <SwipeButtons />
      </header>
    </div>
  );
}

export default App;
