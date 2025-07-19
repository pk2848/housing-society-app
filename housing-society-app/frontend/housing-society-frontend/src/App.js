import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import SocietyList from './components/SocietyList';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Use the Header component here */}

        <div style={{ display: 'flex' }}>
          <SocietyList /> {/* Use the SocietyList component here */}

          {/* Main Content Area */}
          <div style={{ flexGrow: 1, padding: '10px' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* Add more routes here as you create new pages */}
            </Routes>
          </div>
        </div>

        <Footer /> {/* Use the Footer component here */}
      </div>
    </Router>
  );
}

export default App;
