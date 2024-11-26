import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./SignUp.css";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // Trạng thái thông báo
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePhoneNumberVisibility = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  const handleBack = () => {
    navigate(-1); // Quay lại trang trước
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Giả lập lưu thông tin người dùng vào localStorage để đánh dấu đăng nhập
    const email = e.target.elements.email.value; // Lấy email từ form
    localStorage.setItem("userEmail", email); // Lưu email vào localStorage để đăng nhập

    // Hiển thị thông báo đăng ký thành công
    setSuccessMessage("Đăng ký thành công! Đang chuyển hướng...");

    // Tự động điều hướng đến trang Home sau 2 giây
    setTimeout(() => {
      navigate("/"); // Điều hướng đến trang Home
    }, 2000);
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <button className="back-button" onClick={handleBack}>
          <FaArrowLeft />
        </button>
        <img
          src="./logo-no-background 1.png"
          alt="Melodies Logo"
          className="logo-image"
        />
        <h2 className="logo-text">Melodies</h2>
        <h3 className="sign-up-title">Sign In To Continue</h3>

        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              className="input-field"
              required
            />
          </div>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-field"
              required
            />
            <span className="show-password" onClick={togglePasswordVisibility}>
              👁️
            </span>
          </div>
          <div className="input-group">
            <input
              type={showPhoneNumber ? "text" : "password"}
              placeholder="Phone Number"
              className="input-field"
              required
            />
            <span
              className="show-password"
              onClick={togglePhoneNumberVisibility}
            >
              👁️
            </span>
          </div>

          <button type="submit" className="create-account-button">
            Create an account
          </button>
        </form>

        {/* Hiển thị thông báo đăng ký thành công */}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}

export default SignUp;
