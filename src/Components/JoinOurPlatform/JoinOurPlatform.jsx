import React from "react";
import "./JoinOurPlatform.css";

function JoinOurPlatform() {
  return (
    <div className="join-platform-container">
      <h2 className="join-title">Join Our Platform</h2>
      <p className="join-description">
        You can be one of the <span className="highlight-member">members</span>{" "}
        of our platform by just adding some necessarily information. If you
        already have an account on our website, you can just hit the{" "}
        <span className="highlight-login">Login button</span>.
      </p>
      <div className="button-group">
        <button className="signup-button">Sign Up</button>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
}

export default JoinOurPlatform;
