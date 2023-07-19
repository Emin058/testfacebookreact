import React, { useState } from "react";
import FbLogo from "../../assets/icons/fblogo.svg";
import styles from "./Login.module.scss";
import { useDispatch } from "react-redux";

import { loginUser } from "../../redux/actions/user";
const Login = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: "kminchelle",
    password: "0lelplR",
  });

  const handleChangeUserName = (e) => {
    const { value } = e.target;
    setUserData({
      ...userData,
      username: value,
    });
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setUserData({
      ...userData,
      password: value,
    });
  };

  const onLoginUser = () => {
    dispatch(loginUser(userData));
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.leftItem}>
        <img className={styles.fblogo} src={FbLogo} />
        <h2 className={styles.webInfo}>
          Connect with friends and the world around you on Facebook.
        </h2>
      </div>

      <div>
        <div className={styles.rightPart}>
          <input
            onChange={handleChangeUserName}
            className={styles.inputs}
            placeholder={"Email or phone number"}
            type="text"
            value={userData.username}
          />
          <input
            onChange={handleChangePassword}
            className={styles.inputs}
            placeholder={"Password"}
            value={userData.password}
          />
          <button onClick={onLoginUser} className={styles.loginButton}>
            Log In
          </button>
        </div>
        <div className={styles.updatePasswordLink}>Forgot password?</div>
        <hr />
        <button className={styles.accountButton}>Create new account</button>
        <div className={styles.infoCreatePage}>
          <span style={{ fontWeight: "bold", cursor: "pointer" }}>
            Create a Page
          </span>{" "}
          for a celebrity, brand or business.
        </div>
      </div>
    </div>
  );
};

export default Login;
