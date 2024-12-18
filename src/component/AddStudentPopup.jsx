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
          </div>
          <div className={styles.formRow}>
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
          </div>
          <div className={styles.formRow}>          
            <label className={styles.label}>
              Father's name:
              <input
                className={styles.input}
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.label}>
              Contact Number:
              <input
                className={styles.input}
                type="text"
                name="fatherContact"
                value={formData.fatherContact}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formRow}>          
            <label className={styles.label}>
              Mother's name:
              <input
                className={styles.input}
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.label}>
              Contact Number:
              <input
                className={styles.input}
                type="text"
                name="motherContact"
                value={formData.motherContact}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className={styles.formRow}>
            <label className={styles.label}>
              Enrolled Date:
              <input
                className={styles.input}
                type="date"
                name="enrolledDate"
                value={formData.enrolledDate}
                onChange={handleChange}
                required
              />
            </label>
            <label className={styles.label}>
              Enrolled Grade:
              <input
                className={styles.input}
                type="text"
                name="enrolledGrade"
                value={formData.enrolledGrade}
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
