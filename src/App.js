import './index.css'
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import IntervalsCarousel from './Components/Carousel'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {/* Carousel */}
        < IntervalsCarousel />
        <Home />
      </div>
    </div>
  );
}

export default App;
