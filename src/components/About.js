import { Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Grid container lg={12} sm={12} md={12} sx={{ backgroundColor: "#0693e3" }}>
      <Grid
        item
        lg={12}
        sm={12}
        md={12}
        className="d-flex justify-content-around"
        mt={5}
        mb={2}
        sx={{ color: "white" }}
      >
        <Typography>About us</Typography>
        <Typography>Features</Typography>
        <Typography>Services</Typography>
        <Typography>Contact us</Typography>
      </Grid>
      <Grid
        item
        lg={12}
        sm={12}
        md={12}
        className="d-flex justify-content-around"
      >
        <Typography
          sx={{ border: "1px solid white", width: "5%" }}
        ></Typography>
      </Grid>

      <Grid
        item
        lg={12}
        sm={12}
        md={12}
        className="d-flex justify-content-around"
        my={3}
      >
        <Typography sx={{ color: "white" }}>
          &copy; 2023 RbGo - Free URL Shortener - All copy rights are reserved
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
