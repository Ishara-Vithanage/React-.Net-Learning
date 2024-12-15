import React, { useState } from 'react';
import styles from './styles/Popup.module.css'; // Import the CSS module

const AddStudentPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    parentDetails: '',
    nationality: '',
    religion: '',
    contactDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Data:', formData);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2 className={styles.title}>Add Student</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <label className={styles.label}>
              Full Name:
              <input
                className={styles.input}
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.label}>
              Date of Birth:
              <input
                className={styles.input}
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>
              Address:
              <input
                className={styles.input}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.label}>
              Parent's Details:
              <input
                className={styles.input}
                type="text"
                name="parentDetails"
                value={formData.parentDetails}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>
              Nationality:
              <input
                className={styles.input}
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.label}>
              Religion:
              <input
                className={styles.input}
                type="text"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>
              Contact Details:
              <input
                className={styles.input}
                type="text"
                name="contactDetails"
                value={formData.contactDetails}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles['button-group']}>
            <button className={styles['submit-button']} type="submit">
              Submit
            </button>
            <button className={styles['cancel-button']} onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentPopup;
