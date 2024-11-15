import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer'; // Import the Footer component
import styles from './styles/Dashboard.module.css'; // Import the CSS file
import logo from '../assets/anandaLogo.png'; // Import the image file
import studentRecords from '../assets/studentRecords.jpg'; // Import the image file
import teacherRecords from '../assets/teacherRecords.jpg'; // Import the image file
import employeeRecords from '../assets/employeeRecords.jpg'; // Import the image file


const Dashboard = () => {

    const navigate = useNavigate();

    const navigateStudentsRecords = () => {
        navigate('/student-records');
    }
    const navigateTeacherRecords = () => {
        navigate('/teacher-records');
    }
    const navigateEmployeeRecords = () => {
        navigate('/employee-records');
    }

    return (

        <div className={styles.dashboard}>
            <Header pageName="Dashboard" />
            {/* Top 25% Background Section */}
            <div className={styles.topSection}>
                <h1 className={styles.topTitle}>School Administration System</h1>
                <img src={logo} alt="School Logo" className={styles.school_logo} />
            </div>

            {/* Remaining 75% Content Section */}
            <div className={styles.content}>
                <div className={styles.button} id="student-records" onClick={navigateStudentsRecords}>
                    <img src={studentRecords} alt="Student Records" />
                    <p>Student Records</p>
                </div>
                <div className={styles.button} id="teacher-records" onClick={navigateTeacherRecords}>
                    <img src={teacherRecords} alt="Teacher Records" />
                    <p>Teacher Records</p>
                </div>
                <div className={styles.button} id="employee-records" onClick={navigateEmployeeRecords}>
                    <img src={employeeRecords} alt="Employee Records" />
                    <p>Employee Records</p>
                </div>
            </div>
            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Dashboard;
