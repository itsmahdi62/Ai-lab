import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Demo from "./components/Demo/Demo"
import Members from './components/Members/Members';
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Members />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
