import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function SignIn({ onSignIn }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async (event) => {
    event.preventDefault(); // Prevent form submission
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      setUser(userCredential.user);
      setError(null);
      // alert("Login successful");

    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <style>{styles}</style>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={login}>
            <h3>Login Here</h3>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email..."
              value={loginEmail}
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
              id="email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password..."
              value={loginPassword}
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
              id="password"
              required
            />
            <br />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
}


const styles = `
*,
*:before,
*:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: #080710;
}

.background {
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
}

.background .shape {
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
}

.shape:first-child {
    background: linear-gradient(#1845ad,
            #23a2f6);
    left: -80px;
    top: -80px;
}

.shape:last-child {
    background: linear-gradient(to right,
            #ff512f,
            #f09819);
    right: -30px;
    bottom: -80px;
}

form {
  margin: 65px;
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: relative;
  top: 80%;
  border-radius: 10px;
  backdrop-filter: blur(3px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

form * {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
}

label {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
}

input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
}

::placeholder {
    color: #e5e5e5;
}

button {
    margin-top: 50px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}

.social {
    margin-top: 30px;
    display: flex;
}

.social div {
    background: red;
    width: 150px;
    border-radius: 3px;
    padding: 5px 10px 10px 5px;
    background-color: rgba(255, 255, 255, 0.27);
    color: #eaf0fb;
    text-align: center;
}

.social div:hover {
    background-color: rgba(255, 255, 255, 0.47);
}

.social .fb {
    margin-left: 25px;
}

.social i {
    margin-right: 4px;
}


.error {
    color: red;
    font-size: 14px;
    margin-top: 5px;
    display: none;
    /* Hide error message by default */
}

.error.show {
    display: block;
    /* Display error message when there's an error */
}
`

export default SignIn;