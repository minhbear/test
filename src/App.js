import logo from './logo.svg';
import './App.css';
import TinderCard from './components/TinderCard';

function App() {
  return (
    <div className="App" 
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <TinderCard />
    </div>
  );
}

export default App;
