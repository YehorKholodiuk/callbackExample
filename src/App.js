import logo from './logo.svg';
import './App.css';
import PlusButton from "./PlusButton";

function App() {
  const appClick = () => {
    console.log ('App click')
  }
  return (
    <div className="App">
      <PlusButton
        buttonText='plus one'
        buttonOnClick={appClick}/>
    </div>
  );
}

export default App;
