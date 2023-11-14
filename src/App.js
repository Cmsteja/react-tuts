import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Test from './test';

function App() {
  return (
    <Router >
    {/* <img src={test} alt="Background" className="background-image" /> */}
        <Routes>
          <Route exact path="/test" Component={Test}/>
        </Routes>
    </Router>
  );
}

export default App;
