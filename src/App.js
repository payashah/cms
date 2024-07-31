import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Routes from './Routes';
import { useRoutes } from 'react-router-dom';

function App() {

  const MyRouter = useRoutes(Routes)

  return (
    <div className="App-ctrl">
      <Sidebar></Sidebar>
      <div className='App'>
        <Header></Header>
        {MyRouter}
      </div>
    </div>
  );
}

export default App;
