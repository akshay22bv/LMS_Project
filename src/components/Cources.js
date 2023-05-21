import React from "react";
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

const Cources = () => {
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
        <Grid
          item
          container
          lg={4}
          sm={4}
          md={4}
          className="d-flex justify-content-center"
        >
          <Card sx={{ border: "5px solid #4d678a", borderRadius: 5 }}>
            <CardMedia
              component="img"
              height={200}
              image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg" // Replace with your image URL
              alt="Example Image"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                What after 12 th class?
              </Typography>
            </CardContent>
          </Card>{" "}
        </Grid>
        <Grid
          item
          container
          lg={4}
          sm={4}
          md={4}
          className="d-flex justify-content-center"
        >
          <Card sx={{ border: "5px solid #4d678a", borderRadius: 5 }}>
            <CardMedia
              component="img"
              height={200}
              image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg" // Replace with your image URL
              alt="Example Image"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                What after 12th class?
              </Typography>
            </CardContent>
          </Card>{" "}
        </Grid>
        <Grid
          item
          container
          lg={4}
          sm={4}
          md={4}
          className="d-flex justify-content-center"
        >
          <Card sx={{ border: "5px solid #4d678a", borderRadius: 5 }}>
            <CardMedia
              component="img"
              height={200}
              image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg" // Replace with your image URL
              alt="Example Image"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                What after 12 th class?
              </Typography>
            </CardContent>
          </Card>{" "}
        </Grid>
        <Grid
          item
          container
          lg={4}
          sm={4}
          md={4}
          className="d-flex justify-content-center"
        >
          <Card sx={{ border: "5px solid #4d678a", borderRadius: 5 }}>
            <CardMedia
              component="img"
              height={200}
              image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg" // Replace with your image URL
              alt="Example Image"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                What after 12 th class?
              </Typography>
            </CardContent>
          </Card>{" "}
        </Grid>
        <Grid
          item
          container
          lg={4}
          sm={4}
          md={4}
          className="d-flex justify-content-center"
        >
          <Card sx={{ border: "5px solid #4d678a", borderRadius: 5 }}>
            <CardMedia
              component="img"
              height={200}
              image="https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg" // Replace with your image URL
              alt="Example Image"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                What after 12 th class?
              </Typography>
            </CardContent>
          </Card>{" "}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cources;
