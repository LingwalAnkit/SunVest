import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Dashboard from './Components/Dashboard';

import { Provider } from 'react-redux';
import { store } from './app/store';
import Home from './Components/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
