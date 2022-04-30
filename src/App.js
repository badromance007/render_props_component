import './App.css';
import Menu from './components/Menu';
import Favorite from './components/Favorite';
import Menu2 from './components/Menu2';
import Toggler from './components/Toggler';
import Favorite2 from './components/Favorite2';
import Toggler2 from './components/Toggler2';

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
      )}/>

      <h1>Apply Render Props technique as child component</h1>
      <Toggler2>
        {
          ({on, toggle}) => {
            return <Favorite2 on={on} toggle={toggle} />
          }
        }
      </Toggler2>
    </div>
  );
}

export default App;
