import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import TrainList from './Components/TrainLists/Views/TrainList';
import TrainModel from './Components/TrainDetails/Views/TrainDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<TrainList/>}/>
      <Route path='/detail' element={<TrainModel/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
