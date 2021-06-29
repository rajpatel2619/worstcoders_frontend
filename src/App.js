import './App.css';
import Mobile from './components/mobile';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <div className="web">
      <Home />
      </div>
      <div className="mobile">
        <Mobile />
      </div>
    </div>
  );
}

export default App;
