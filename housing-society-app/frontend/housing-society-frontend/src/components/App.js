import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import SocietyListPage from './components/SocietyListPage';
import SocietyDetailsPage from './components/SocietyDetailsPage';
import AddSocietyPage from './components/AddSocietyPage';
import EditSocietyPage from './components/EditSocietyPage';
import HouseListPage from './components/HouseListPage';
import HouseDetailsPage from './components/HouseDetailsPage';
import AddHousePage from './components/AddHousePage';
import EditHousePage from './components/EditHousePage';
import ComplaintListPage from './components/ComplaintListPage';
import ComplaintDetailsPage from './components/ComplaintDetailsPage';
import AddComplaintPage from './components/AddComplaintPage';
import EditComplaintPage from './components/EditComplaintPage';
import AllocateHousePage from './components/AllocateHousePage';
import BuySellListPage from './components/BuySellListPage';
import ReportsPage from './components/ReportsPage';
import AddMemberPage from './components/AddMemberPage'; // Ensure AddMemberPage is imported

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Navbar />
      <div className="flex flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} >
             {/* Nested routes for HomePage sidebar */}
            <Route path="societies/add" element={<AddSocietyPage />} />
            <Route path="houses/add" element={<AddHousePage />} />
            <Route path="members/add" element={<AddMemberPage />} /> {/* Changed element to AddMemberPage */}
            <Route path="allocate-house" element={<AllocateHousePage />} />
            <Route path="buy-sell" element={<BuySellListPage />} />
            <Route path="reports" element={<ReportsPage />} />

             {/* Routes for List pages that should appear on the right of sidebar */}
             <Route path="societies" element={<SocietyListPage />} />
             <Route path="houses" element={<HouseListPage />} />
             <Route path="complaints" element={<ComplaintListPage />} />



          </Route>

          {/* Top-level routes that might not have the sidebar */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
           {/* Routes for details or edit pages that might not have the sidebar, adjust as needed */}
          <Route path="/societies/:id" element={<SocietyDetailsPage />} />
          <Route path="/societies/edit/:id" element={<EditSocietyPage />} />
          <Route path="/houses/:id" element={<HouseDetailsPage />} />
          <Route path="/houses/edit/:id" element={<EditHousePage />} />
          <Route path="/complaints/:id" element={<ComplaintDetailsPage />} />
          <Route path="/complaints/edit/:id" element={<EditComplaintPage />} />


        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
