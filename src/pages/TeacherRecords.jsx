import { React,useState, useEffect } from 'react';
import styles from './styles/AllRecords.module.css'; // Import the CSS for styling
import Header from '../component/Header';
import Footer from '../component/Footer';
import SearchBar from '../component/SearchBar';
import getTeacher from '../services/getTeacherInfo';

const StudentRecords = () => {

    const [teachers, setTeachers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = "Teacher Records";

        // Fetch teachers data
        const fetchTeachers = async () => {
            try {
                const { teacherData } = await getTeacher(); // Call the service
                setTeachers(teacherData); // Update the teacher state
            } catch (err) {
                console.error("Failed to fetch teacher data:", err);
                setError("Failed to fetch teacher data.");
            }
        };
        fetchTeachers();
    }, []);

    return (
        <div>
            <Header pageName="Teacher Records" />
            <div className={styles.student_records}>
                {/* Add Student Button */}
                <button className={styles.add_student_btn}>Add Student</button>

                {/* Table for student records */}
                <table className={styles.student_table}>
                    <thead>
                        <tr>
                            <th>Teacher ID</th>
                            <th>Full Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className={styles.scrollable_tbody}>
                        <SearchBar placeholder="Enter Teacher ID..." />
                        {error ? (
                            <tr>
                                <td colSpan="3" className={styles.error_message}>
                                    {error}
                                </td>
                            </tr>
                        ) : teachers.length > 0 ? (
                            teachers.map((teacher) => (
                                <tr key={teacher.id}>
                                    <td>{teacher.teacher_id}</td>
                                    <td>{teacher.full_name}</td>
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
                                    No teacher records available.
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
