import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      { /*Categories*/}
      <Categories />
      { /*Recommended*/}
      { /*SpecialOffers*/}
      { /*Browse*/}
      { /*Footer*/}
      <div className="h-screen"></div>
    </div>
  );
}

export default App;
