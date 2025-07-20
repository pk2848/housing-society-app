import React from 'react';

const menuItems = [
  { label: 'Home', key: 'Home' },
  { label: 'Login', key: 'Login' },
  { label: 'Register', key: 'Register' },
  { label: 'Add Complaint', key: 'AddComplaint' },
  { label: 'Complaint List', key: 'ComplaintList' },
  { label: 'Complaint Details', key: 'ComplaintDetails' },
  { label: 'Edit Complaint', key: 'EditComplaint' },
  { label: 'Add Society', key: 'AddSociety' },
  { label: 'Edit Society', key: 'EditSociety' },
  { label: 'Society Details', key: 'SocietyDetails' },
  { label: 'Society List', key: 'SocietyList' },
  { label: 'Society List Page', key: 'SocietyListPage' },
  { label: 'Add House', key: 'AddHouse' },
  { label: 'Edit House', key: 'EditHouse' },
  { label: 'House Details', key: 'HouseDetails' },
  { label: 'House List', key: 'HouseList' },
  { label: 'Add Member', key: 'AddMember' },
  { label: 'Header', key: 'Header' },
  { label: 'Footer', key: 'Footer' },
  { label: 'Theme Switcher', key: 'ThemeSwitcher' },
];

function Navbar({ onNavigate, activePage }) {
  return (
    <div style={{
      width: '250px',
      backgroundColor: '#f0f0f0',
      borderRight: '1px solid #ccc',
      padding: '20px',
      height: '100vh',
      overflowY: 'auto'
    }}>
      <h2 style={{ textAlign: 'center' }}>Pages</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {menuItems.map(item => (
          <li
            key={item.key}
            onClick={() => onNavigate(item.key)}
            style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor: activePage === item.key ? '#d0e6ff' : 'transparent',
              cursor: 'pointer',
              borderRadius: '4px',
              fontWeight: activePage === item.key ? 'bold' : 'normal'
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
