import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { domain } from "../App";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Cources = () => {
  const [videos, setVideos] = useState();
  const navigate = useNavigate();

  let access_token = localStorage.getItem("access_token");

  const decodedToken = access_token && jwt_decode(access_token);
  console.log({ decodedToken });

  const fetchVideos = () => {
    console.log({ access_token });

    fetch(`${domain}/api/videos/find`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setVideos(data);
        }
        // Handle the data received from the server
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("access_token");
    console.log("callllllllllles", tokenFromLocalStorage);

    access_token && fetchVideos();
  }, [localStorage.getItem("access_token")]);

  console.log({ videos });

  return (
    <Grid container lg={12} sm={12} md={12} style={{ background: "pink" }}>
      <Grid
        item
        container
        lg={12}
        sm={12}
        md={12}
        className="d-flex justify-content-between"
        sx={{ padding: "10px" }}
      >
        <Grid item lg={1} sm={2} md={2}>
          <Button
            className="LoginButton"
            style={{
              fontWeight: "bold",
              color: "black",
              borderRadius: "20px",
              background: "white",
            }}
          >
            Cources
          </Button>
        </Grid>
        <Grid item lg={2} sm={2} md={2}>
          <TextField
            style={{ background: "white", borderRadius: "30px", border: "0px" }}
            size="small"
            placeholder="Search"
            InputProps={{
              style: {
                borderRadius: "30px",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={12}
        sm={12}
        md={12}
        spacing={2}
        sx={{ display: "flex" }}
      >
        {videos &&
          Array.isArray(videos) &&
          videos.map((video) => (
            <Grid
              item
              container
              lg={4}
              sm={4}
              md={4}
              className="d-flex justify-content-center"
            >
              <Card
                sx={{
                  border: "5px solid #4D678A",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (decodedToken && decodedToken.isAdmin) {
                    navigate("/videos", { state: video });
                  } else if (decodedToken.enrolled) {
                    navigate("/videos", { state: video });
                  } else {
                    alert("Please enroll to get video access");
                  }
                }}
              >
                <CardMedia
                  component="img"
                  title={video.title}
                  src={video.imageUrl}
                  sx={{
                    height: "200px",
                    width: "400px",
                    objectFit: "cover",
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {video.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {video.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default Cources;
