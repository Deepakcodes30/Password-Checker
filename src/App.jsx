import { useState } from "react";
import "./App.css";

function App() {
  const [inputPassword, setInputPassword] = useState("password");
  const [btnName, setBtnName] = useState("Show Password");
  const [password, setPassword] = useState("");

  const handlePassword = () => {
    if (inputPassword === "password") {
      setInputPassword("text");
      setBtnName("Hide Password");
    } else {
      setInputPassword("password");
      setBtnName("Show Password");
    }
  };

  return (
    <>
      <div>
        <div>
          <input
            type={inputPassword}
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="showBtn" onClick={handlePassword}>
            {btnName}
          </button>
        </div>

        <div>
          <ul>
            <li className={/[A-Z]/.test(password) ? "valid" : "invalid"}>
              Upper Case
            </li>
            <li
              className={
                /[!@#$%^&*(),.?":{}|<>]/.test(password) ? "valid" : "invalid"
              }>
              Special Character
            </li>
            <li className={/\d/.test(password) ? "valid" : "invalid"}>
              Number
            </li>
            <li className={password.length > 8 ? "valid" : "invalid"}>
              More than 8 Characters
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
