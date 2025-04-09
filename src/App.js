import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Recommended from './components/Recommended';

function App() {
  return (
    <div className="App">
      <Navbar />
      { /*Categories*/}
      <Categories />
      <Recommended />
      { /*SpecialOffers*/}
      { /*Browse*/}
      { /*Footer*/}
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
}

export default App;
