import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom'
import Home from "./Component/Home/Home";


function App() {
  return (
    <div className="app">
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route exac path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
