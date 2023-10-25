import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
    </div>
  );
}

export default App;
