import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/loginFormIMG.png";
import Eye from "../../icons/Eye";
import LanguageMenu from "../LangugeMenu/LanguageMenu";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    // Connect API check login
    // if () {
    //   console.log("ID and Password cannot be empty");
    //   return;
    // }
    //************ */
    //Login successful
    navigate("/dashboard");
  };
  return (
    <div className="rectangle">
      <div className="topmenu">
        <LanguageMenu />
      </div>
      <div className="left">
        <div className="formtitle">Sign In</div>
        <div className="formContent">
          <div className="form">
            <form className="login-form">
              <label htmlFor="userID">User ID</label>
              <input
                type="text"
                id="userID"
                name="userID"
                placeholder="Enter your User ID"
                className="input-field"
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                className="input-field"
              />

              <span className="iconEye">
                <Eye />
              </span>
            </form>
            <button className="btnLogin" onClick={handleSignUp}>
              SIGN IN
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightImg">
          <img src={image} alt="imgLoginForm" className="image" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
