import React, { useEffect, useState } from 'react';
import styles from './styles/AllRecords.module.css'; // Import the CSS for styling
import Header from '../component/Header';
import Footer from '../component/Footer';
import SearchBar from '../component/SearchBar';
import getStudent from '../services/getStudentInfo'; // Import the service

const StudentRecords = () => {
    const [students, setStudents] = useState([]); // State to hold student data
    const [error, setError] = useState(null); // State to handle any errors

    useEffect(() => {
        document.title = "Student Records";

        // Fetch student data
        const fetchStudents = async () => {
            try {
                const { users } = await getStudent(); // Call the service
                setStudents(users); // Update the students state
            } catch (err) {
                console.error("Failed to fetch student data:", err);
                setError("Failed to fetch student data.");
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <Header pageName="Student Records" />
            <div className={styles.student_records}>
                {/* Add Student Button */}
                <button className={styles.add_student_btn}>Add Student</button>

                {/* Table for student records */}
                <table className={styles.student_table}>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Full Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className={styles.scrollable_tbody}>
                        <SearchBar placeholder="Enter Student ID..." />
                        {error ? (
                            <tr>
                                <td colSpan="3" className={styles.error_message}>
                                    {error}
                                </td>
                            </tr>
                        ) : students.length > 0 ? (
                            students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.student_id}</td>
                                    <td>{student.full_name}</td>
                                    <td>
                                        <button className={styles.view_more_btn}>
                                            View More
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className={styles.no_data_message}>
                                    No student records available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default StudentRecords;
