import './App.css';
import Homescreen from './components/Homescreen';
import Navigation from './components/Navigation';
import Slider from './components/Slider';
import VideoPlayer from './components/VideoPlayer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Homescreen />
      <VideoPlayer />
      <Slider />
    </div>
  );
}

export default App;
