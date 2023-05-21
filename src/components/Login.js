import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Typography, InputAdornment } from "@mui/material";
import "./Login.css"; // Import custom CSS file for styling
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { domain } from "../App";

const Login = () => {
  const navigate = useNavigate();
  // Initial form values
  const initialValues = {
    email: "",
    password: "",
  };

  // Form submission handler
  const handleSubmit = (values) => {
    console.log(values);
    fetch(`${domain}/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        console.log("ddddddddd", response);
        const statusCode = response.status;

        if (statusCode === 200) {
          alert("user loggedin successfully");
          navigate("/");
        } else {
        }
        return response.json();
      })
      .then((result) => {
        console.log({ result });

        localStorage.setItem("access_token", result.access_token);

        if (result.status === 400) {
          alert(result.message);
        }

        // if (result.status === "success") {
        //   alert(result.message);
        // } else {
        //   alert("user not created");
        // }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Form validation schema (optional)
  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackIosIcon />
      </Button>
      <div className="login-container">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validateForm}
        >
          <Form>
            <div className="container">
              <div className="enroll_text">
                <Typography fontSize={30}>Sign In</Typography>{" "}
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="email" className="label">
                  Email:
                </label>
                <Field
                  as={TextField}
                  type="email"
                  id="email"
                  name="email"
                  variant="outlined"
                  size="small"
                  className="input-field"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="label">
                  Password:
                </label>
                <Field
                  as={TextField}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  variant="outlined"
                  size="small"
                  className="input-field"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ cursor: "pointer" }}
                        onClick={handleTogglePassword}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="enroll_text">
                <Button
                  type="submit"
                  variant="contained"
                  className="submit-button"
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
