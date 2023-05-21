import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  return (
    <Grid container lg={12} sm={12} md={12} className="footer_container">
      <Grid
        item
        container
        lg={12}
        sm={12}
        md={12}
        className="enroll_text"
        sx={{ padding: "10px" }}
      >
        <Typography fontSize={20}>Get In Touch</Typography>
      </Grid>
      <Grid item container lg={12} sm={12} md={12} sx={{ padding: "10px" }}>
        <Grid container lg={6} sm={6} md={6} gap={1}>
          <IconButton sx={{ background: "white" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ background: "white" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ background: "white" }}>
            <YouTubeIcon />
          </IconButton>
        </Grid>
        <Grid
          container
          lg={6}
          sm={6}
          md={6}
          gap={1}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Typography>
            <WhatsAppIcon />
            +91-0000000000
          </Typography>
          <Typography>
            <PhoneInTalkIcon />
            +91-0000000000
          </Typography>
          <Typography>
            <MailOutlineIcon />
            Example@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
