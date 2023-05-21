import {
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Enroll.css";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Enroll = () => {
  const handleSubscribe = () => {
    // Redirect or perform any action when the subscribe button is clicked
    window.open(
      "https://www.youtube.com/channel/CHANNEL_ID?sub_confirmation=1"
    );
  };
  return (
    <Grid container lg={12} md={12} sm={12} style={{ background: "#edeccc" }}>
      {/* <Grid item lg={12} md={12} sm={12}>
        <Typography
          fontSize={60}
          style={{ color: "#134682", fontWeight: "bold" }}
          className="enroll_text"
        >
          Get the Edge you need to Succeed after
        </Typography>
        <Typography
          fontSize={60}
          style={{ color: "#ff6a00", fontWeight: "bold" }}
          className="enroll_text"
        >
          12th
        </Typography>
        <Typography
          fontSize={60}
          style={{ color: "#134682", fontWeight: "bold" }}
          className="enroll_text"
        >
          With our counselling services
        </Typography>
      </Grid> */}
      <Grid container item lg={12} md={12} sm={12}>
        <Grid container item lg={6} md={6} sm={6} sx={{ padding: "30px" }}>
          <Grid
            item
            lg={12}
            sm={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item lg={8} sm={8} md={8} style={{ borderRadius: "30px" }}>
              <IconButton sx={{ backgroundColor: "white" }}>
                <SearchIcon />
              </IconButton>
              <TextField
                placeholder="Search for Information on 150+ Career options..."
                variant="outlined"
                sx={{
                  width: "90%",
                }}
                InputProps={{
                  style: {
                    borderRadius: "30px",
                    backgroundColor: "white",
                  },
                }}
                size="small"
              />
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
          <Grid
            item
            lg={12}
            sm={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item lg={3} sm={3} md={3}>
              <Button
                className="enroll-btn"
                style={{ width: "100%", color: "white", borderRadius: 20 }}
              >
                Enroll Now
              </Button>
            </Grid>
          </Grid>
          <br /> <br />
          <Grid
            item
            lg={12}
            sm={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography sx={{ color: "#ff6a00", fontSize: 30 }}>
              <WifiCalling3Icon /> Helpline Number +910000000000
            </Typography>
          </Grid>
          <br /> <br />
          <Grid
            item
            lg={12}
            sm={12}
            md={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Typography sx={{ color: "#134682", fontSize: 20 }}>
              Whats's After the 12th?
            </Typography>
          </Grid>
        </Grid>
        <Grid container item lg={6} md={6} sm={6}>
          <Grid container item lg={12} md={12} sm={12} className="enroll_text">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tCB5ptqxN_8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Grid>
          <br /> <br />
          <Grid container item lg={12} md={12} sm={12} className="enroll_text">
            <Button
              onClick={handleSubscribe}
              style={{
                backgroundColor: "#ff0000",
                color: "#ffffff",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <YouTubeIcon />
              &nbsp; Subscribe
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Enroll;
