import './App.css';
import AddPerson from './components/AddPerson';
import Persons from './components/Persons';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Persons/>
        <AddPerson/>
      </header>
    </div>
  );
}

export default App;
