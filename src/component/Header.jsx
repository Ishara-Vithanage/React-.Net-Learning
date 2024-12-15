import React, { useState } from 'react';
import styles from './styles/Header.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ pageName }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleEditProfile = () => {
    // Logic for editing profile
    setDropdownVisible(false); // Hide dropdown after clicking
  };

  const handleLogout = () => {
    // Logic for logging out
    navigate("/")
    setDropdownVisible(false); // Hide dropdown after clicking
  };

  return (
    <header className={styles.header}>
      <div className={styles.pageName}>{pageName}</div>
      <div className={styles.buttonContainer}>
        <button className={styles.profileButton} onClick={toggleDropdown}>
          Profile ▼
        </button>
        {dropdownVisible && (
          <div className={styles.dropdown}>
            <button onClick={handleEditProfile} className={styles.dropdownItem}>
              <i className="bi bi-pencil" style={{ marginRight: "8px" }}></i> Edit Profile
            </button>
            <button onClick={handleLogout} className={styles.dropdownItem}>
              <i className="bi bi-box-arrow-left" style={{ marginRight: "8px" }}></i> Logout 
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
