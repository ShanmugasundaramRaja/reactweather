import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import MyNavbar from './components/MyNavbar';

function App()
{
  return (
    <div>
      <MyNavbar />
      <Home />
    </div>
  );
}

export default App;