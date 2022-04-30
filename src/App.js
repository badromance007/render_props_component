import './App.css';
import Menu from './components/Menu';
import Favorite from './components/Favorite';
import Menu2 from './components/Menu2';
import Toggler from './components/Toggler';

function App() {
  return (
    <div>
      <Menu something="whatever" />
      <hr />
      <Favorite />
      <hr />

      <h3>Another way of using Render Props</h3>
      <Toggler defaultOnValue={true} render={({on, toggle}) => (
        <Menu2 on={on} toggle={toggle} />
      )}

      />
    </div>
  );
}

export default App;
