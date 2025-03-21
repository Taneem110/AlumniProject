import React, { useState } from 'react';
import './Login.css'; // CSS file for styling

const Login = () => {
    const [formData, setFormData] = useState({
        role: 'student', // Default role
        username: '',
        password: '',
        rememberMe: false,
    });
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.username || !formData.password) {
            setError('Please fill in all fields.');
            return;
        }

        // Simulate login/signup logic based on role
        if (isLogin) {
            console.log('Logging in as:', formData.role, formData);
            alert(`Logged in successfully as ${formData.role}`);
        } else {
            console.log('Signing up as:', formData.role, formData);
            alert(`Signed up successfully as ${formData.role}`);
        }

        // Clear form and error
        setError('');
        setFormData({ role: 'student', username: '', password: '', rememberMe: false });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={handleSubmit}>
                    {/* Role Selection Dropdown */}
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="admin">Admin</option>
                            <option value="alumni">Alumni</option>
                            <option value="student">Student</option>
                            <option value="staff">Staff</option>
                        </select>
                    </div>

                    {/* Username Field */}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Remember Me Checkbox (Only for Login) */}
                    {isLogin && (
                        <div className="form-group remember-me">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && <p className="error-message">{error}</p>}

                    {/* Login/Signup Button */}
                    <button type="submit" className="login-button">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>

                    {/* Toggle between Login and Signup */}
                    <p className="toggle-form">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
                            {isLogin ? 'Sign Up' : 'Login'}
                        </span>
                    </p>

                    {/* Forgot Password Link (Only for Login) */}
                    {isLogin && (
                        <p className="forgot-password">
                            <a href="/forgot-password">Forgot Password?</a>
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;