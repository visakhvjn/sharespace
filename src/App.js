import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Editor } from './components/Editor';
import { Home } from './components/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/space/:spaceId' element={<Editor />} />
      </Routes>
    </div>
  );
}

export default App;
