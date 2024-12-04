import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import { MyContext } from "../../App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import GoogleImg from "../../assets/images/googleImg.png";
import axios from "axios";
import { toast } from "react-toastify"; // For displaying notifications

const SignIn = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  // State for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    context.setisHeaderFooterShow(false);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    try {
      const response = await axios.post(
        "localhost:5000/api/auth/login", // API URL
        {
          username,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      context.setUser(response.data.user);
      context.setIsLogin(true);
      toast.success("Login successful!");

      // Navigate to home or dashboard
      navigate("/dashboard");
    } catch (error) {
      // Handle error
      const errorMessage = error.response?.data?.message || "Login failed!";
      toast.error(errorMessage);
    }
  };

  return (
    <section className="section signInPage">
      <div className="shape-bottom">
        <svg
          fill="#fff"
          viewBox="0 0 1921 819.8"
          style={{ enableBackground: "new 0 0 1921 819.8" }}
        >
          <path
            className="st0"
            d="M1921,413.1v406.7H0V0h0.4l28.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4
            c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
          ></path>
        </svg>
      </div>

      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="text-center">
            <img src={Logo} alt="Logo" />
          </div>

          <form className="mt-0" onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <br />

            <div className="form-group">
              <TextField
                label="Username"
                type="text"
                required
                variant="standard"
                className="w-100"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <TextField
                label="Password"
                type="password"
                required
                variant="standard"
                className="w-100"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Link to="/forgot-password" className="border-effect cursor txt">
              Forgot Password?
            </Link>

            <Button type="submit" className="btn-blue btn-big w-100 mt-3 mb-3">
              Log In
            </Button>

            <p className="txt">
              Not Registered?{" "}
              <Link to="/signUp" className="border-effect">
                Register
              </Link>
            </p>

            <h6 className="mt-4 text-center font-weight-bold">
              Or continue with social account
            </h6>

            <Button className="loginWithGoogle mt-2" variant="outlined">
              <img src={GoogleImg} className="w-100" alt="Google Sign In" />{" "}
              Sign In with Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
