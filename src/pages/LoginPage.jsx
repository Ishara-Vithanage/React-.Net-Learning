import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import anandaLogo from "../assets/anandaLogo.png";
import styles from "./styles/Login.module.css";

const LoginPage = () => {
    useEffect(() => {
        document.title = "Login - SAS";
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <div className={styles.loginHeader}>
                    <div className={styles.headingLeft}>
                        <h1>School Administration System</h1>
                        <p>Ananda College, Colombo</p>
                    </div>
                    <img
                        src={anandaLogo} // Replace with your logo URL
                        alt="Logo"
                        className={styles.logo}
                    />
                </div>
                <form>
                    <input
                        type="text"
                        placeholder="User ID"
                        className={styles.inputField}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={styles.inputField}
                        required
                    />
                    <button type="submit" className={styles.loginButton} onClick={handleSubmit}>
                        Login
                    </button>
                </form>
                <p className={styles.bottomText}>&copy; 2024 School Administration System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default LoginPage;
