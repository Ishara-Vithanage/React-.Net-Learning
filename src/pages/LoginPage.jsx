import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import anandaLogo from "../assets/anandaLogo.png";
import styles from "./styles/Login.module.css";

const LoginPage = () => {
    useEffect(() => {
        document.title = "Login - SAS";
    }, []);

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userid: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials({ ...credentials, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { userid, password } = credentials;

        if (userid === "admin" && password === "admin") {
            navigate("/dashboard"); // Redirect to the dashboard or any other page
        } else {
            setErrorMessage("Login failed! Invalid User ID or Password.");
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <div className={styles.loginHeader}>
                    <div className={styles.headingLeft}>
                        <h1>School Administration System</h1>
                        <p>Ananda College, Colombo</p>
                    </div>
                    <img
                        src={anandaLogo}
                        alt="Logo"
                        className={styles.logo}
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        id="userid"
                        type="text"
                        placeholder="User ID"
                        className={styles.inputField}
                        value={credentials.userid}
                        onChange={handleChange}
                        required
                    />
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className={styles.inputField}
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className={styles.loginButton}>
                        Login
                    </button>
                </form>
                {errorMessage && (
                    <p className={styles.errorMessage}>{errorMessage}</p>
                )}
                <p className={styles.bottomText}>&copy; 2024 School Administration System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default LoginPage;
