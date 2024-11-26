import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Giả lập quá trình đăng nhập thành công
    // Bạn có thể thêm logic gọi API xác thực tại đây
    if (email && password) {
      // Lưu email vào localStorage sau khi đăng nhập thành công
      localStorage.setItem("userEmail", email);

      // Điều hướng về trang Home
      navigate("/");
    } else {
      alert("Please enter valid credentials");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img
          src="./logo-no-background 1.png"
          alt="Melodies Logo"
          className="logo-image"
        />
        <h2 className="logo-text">Melodies</h2>

        <h3 className="login-title">Login To Continue</h3>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
              <span
                className="show-password"
                onClick={togglePasswordVisibility}
              >
                👁️
              </span>
            </div>
          </div>

          <p className="forgot-password" onClick={handleForgotPassword}>
            Forgot password &#x27A1;
          </p>

          <button type="submit" className="loginn-button">
            Login
          </button>
        </form>

        <div className="social-login">
          <button className="google-login">Google Login</button>
          <button className="facebook-login">Facebook Login</button>
        </div>

        <div className="signupp-section">
          <p>Dont Have An Account</p>
          <button className="signup-button">Sign Up</button>
        </div>

        <button className="back-home-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
