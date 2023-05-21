import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Typography, InputAdornment } from "@mui/material";
import "./Login.css"; // Import custom CSS file for styling
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { domain } from "../App";
const SignIn = () => {
  const navigate = useNavigate();

  // Initial form values
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // Form submission handler
  const handleSubmit = (values) => {
    // console.log(values);

    fetch(`${domain}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.status === "success") {
          alert(result.message);
          navigate("/");
        } else {
          alert("user not created");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // Perform your login logic here
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

    if (!values.name) {
      errors.name = "Name is required";
    }
    return errors;
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
                <Typography fontSize={30}>Sign Up</Typography>{" "}
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="email" className="label">
                  Username:
                </label>
                <Field
                  as={TextField}
                  id="name"
                  name="name"
                  variant="outlined"
                  size="small"
                  className="input-field"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>
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
      </div>{" "}
    </div>
  );
};

export default SignIn;
