import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate để điều hướng
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Khởi tạo navigate để điều hướng

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Giả lập quá trình gửi yêu cầu đổi mật khẩu
    // Ở đây bạn có thể gọi API để thực hiện chức năng thực tế
    setMessage("Password has been reset successfully.");

    // Điều hướng về trang login sau khi reset mật khẩu thành công
    setTimeout(() => {
      navigate("/login");
    }, 2000); // Thời gian chờ 2 giây để hiển thị thông báo trước khi chuyển trang
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="reset-button">
            Reset Password
          </button>
        </form>
        {message && <p className="reset-message">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
