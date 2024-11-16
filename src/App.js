import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import StudentRecords from "./pages/StudentRecords";
import TeacherRecords from "./pages/TeacherRecords";
import EmployeeRecords from "./pages/EmployeeRecords";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="/student-records" element={<StudentRecords />} />
      </Routes>
      <Routes>
        <Route path="/teacher-records" element={<TeacherRecords />} />
      </Routes>
      <Routes>
        <Route path="/employee-records" element={<EmployeeRecords />} />
      </Routes>
    </Router>
  )
};

export default App;