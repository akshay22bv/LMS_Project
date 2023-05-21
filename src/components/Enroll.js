import {
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Enroll.css";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import YouTubeIcon from "@mui/icons-material/YouTube";
import StripeCheckout from "react-stripe-checkout";
import { domain } from "../App";
import jwt_decode from "jwt-decode";

const Enroll = () => {
  const stripeKey =
    "pk_test_51NA797SCph2ozb4wkRwoceS3kSxoq2RLJNHWCUcOLp7mKQawzH2yn8WgztjSmxe9nGx7fAUjmg6HwetafC2JFN8u00JusSJmUo";
  const handleSubscribe = () => {
    // Redirect or perform any action when the subscribe button is clicked
    window.open(
      "https://www.youtube.com/channel/CHANNEL_ID?sub_confirmation=1"
    );
  };

  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    console.log("TOKEN", token);
    setStripeToken(token);
  };
  const [response, setResponse] = useState(null);

  let access_token = localStorage.getItem("access_token");

  const decodedToken = access_token && jwt_decode(access_token);
  console.log({ decodedToken });

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(`${domain}/api/enroll/payment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + access_token,
          },
          body: JSON.stringify({
            amount: 100,
          }),
        });
        console.log("PAYMENT_RENPONSE", res);
        setResponse(res.data);
        if (res.status === 200) {
          console.log({ res });
          let userId = decodedToken && decodedToken._id;
          const enroll = await fetch(`${domain}/api/users/enroll/${userId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + access_token,
            },
            body: JSON.stringify({
              enrolled: true,
            }),
          });

          console.log("ENROLL_RENPONSE", enroll);
        }
      } catch (err) {
        console.log("ERR", err);
        setResponse(err.response.data);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

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
              <StripeCheckout
                name="LMS Tutorials"
                image=""
                billingAddress
                shippingAddress
                description="Your total amount is 1 Rupee"
                amount={100}
                token={onToken}
                stripeKey={stripeKey}
                currency="INR"
                locale="in"
              >
                <Button
                  className="enroll-btn"
                  style={{ width: "100%", color: "white", borderRadius: 20 }}
                >
                  Enroll Now
                </Button>
              </StripeCheckout>
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
