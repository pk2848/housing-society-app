// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AddComplaintPage from './components/AddComplaintPage';
import AddHousePage from './components/AddHousePage';
import AddMemberPage from './components/AddMemberPage';
import AddSocietyPage from './components/AddSocietyPage';
import ComplaintDetailsPage from './components/ComplaintDetailsPage';
import ComplaintListPage from './components/ComplaintListPage';
import EditComplaintPage from './components/EditComplaintPage';
import EditHousePage from './components/EditHousePage';
import EditSocietyPage from './components/EditSocietyPage';
import Footer from './components/Footer';
import Header from './components/Header';
import HouseDetailsPage from './components/HouseDetailsPage';
import HouseListPage from './components/HouseListPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import SocietyDetailsPage from './components/SocietyDetailsPage';
import SocietyList from './components/SocietyList';
import SocietyListPage from './components/SocietyListPage';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderComponent = () => {
    switch (currentPage) {
      case 'Navbar': return <Navbar onNavigate={setCurrentPage} />;
      case 'Home': return <HomePage onNavigate={setCurrentPage} />;
      case 'AddComplaint': return <AddComplaintPage onNavigate={setCurrentPage} />;
      case 'AddHouse': return <AddHousePage onNavigate={setCurrentPage} />;
      case 'AddMember': return <AddMemberPage onNavigate={setCurrentPage} />;
      case 'AddSociety': return <AddSocietyPage onNavigate={setCurrentPage} />;
      case 'ComplaintDetails': return <ComplaintDetailsPage onNavigate={setCurrentPage} />;
      case 'ComplaintList': return <ComplaintListPage onNavigate={setCurrentPage} />;
      case 'EditComplaint': return <EditComplaintPage onNavigate={setCurrentPage} />;
      case 'EditHouse': return <EditHousePage onNavigate={setCurrentPage} />;
      case 'EditSociety': return <EditSocietyPage onNavigate={setCurrentPage} />;
      case 'Footer': return <Footer />;
      case 'Header': return <Header />;
      case 'HouseDetails': return <HouseDetailsPage onNavigate={setCurrentPage} />;
      case 'HouseList': return <HouseListPage onNavigate={setCurrentPage} />;
      case 'Login': return <LoginPage onNavigate={setCurrentPage} />;
      case 'Registration': return <RegistrationPage onNavigate={setCurrentPage} />;
      case 'SocietyDetails': return <SocietyDetailsPage onNavigate={setCurrentPage} />;
      case 'SocietyList': return <SocietyList onNavigate={setCurrentPage} />;
      case 'SocietyListPage': return <SocietyListPage onNavigate={setCurrentPage} />;
      case 'ThemeSwitcher': return <ThemeSwitcher />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div>
      <Navbar onNavigate={setCurrentPage} />
      {renderComponent()}
    </div>
  );
}

export default App;
