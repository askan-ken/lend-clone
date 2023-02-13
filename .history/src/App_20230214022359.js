import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="app">
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route exac path="/" element={<h} />
      </Routes>
    </div>
  );
}

export default App;
