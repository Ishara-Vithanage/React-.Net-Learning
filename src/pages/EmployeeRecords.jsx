import { React, useEffect } from 'react';
import styles from './styles/AllRecords.module.css'; // Import the CSS for styling
import Header from '../component/Header';
import Footer from '../component/Footer';
import SearchBar from '../component/SearchBar';

const StudentRecords = () => {

    useEffect(() => {
        document.title = "Employee Records";
    }, []);

    // Sample student data
    const students = [
        { id: 'S001', name: 'John Doe' },
        { id: 'S002', name: 'Jane Smith' },
        { id: 'S003', name: 'Mark Johnson' },
        { id: 'S003', name: 'Mark Johnson' },
        { id: 'S003', name: 'Mark Johnson' },
        { id: 'S003', name: 'Mark Johnson' },
        { id: 'S003', name: 'Mark Johnson' },
        { id: 'S003', name: 'Mark Johnson' }
    ];

    return (
        <div>
            <Header pageName="Employee Records" />
            <div className={styles.student_records}>
                {/* Add Student Button */}
                <button className={styles.add_student_btn}>+ New Record</button>

                {/* Table for student records */}
                <table className={styles.student_table}>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Full Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className={styles.scrollable_tbody}>
                        <SearchBar placeholder="Enter Employee ID..." />
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>
                                    <button className={styles.view_more_btn}>View More</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default StudentRecords;
