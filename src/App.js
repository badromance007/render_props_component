import './App.css';
import Menu from './components/Menu';
import Favorite from './components/Favorite';

function App() {
  return (
    <div>
      <Menu something="whatever" />
      <hr />
      <Favorite />
    </div>
  );
}

export default App;
