import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Languages } from './components/Languages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Languages />
    </div>
  );
}

export default App;
