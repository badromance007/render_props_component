import './App.css';
import Menu from './components/Menu';
import Favorite from './components/Favorite';
import Menu2 from './components/Menu2';
import Toggler from './components/Toggler';
import Favorite2 from './components/Favorite2';
import Toggler2 from './components/Toggler2';
import DataFetcher from './components/DataFetcher';

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


      <h2>Apply render props for self fetching API component</h2>
       <DataFetcher url="https://swapi.dev/api/people/1">
            {({data, loading}) => {
                return (
                    loading ? 
                    <h1>Loading...</h1> :
                    <p>{JSON.stringify(data)}</p>
                )
            }}
        </DataFetcher>
    </div>
  );
}

export default App;
