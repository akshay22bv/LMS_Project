import { Grid, Typography } from "@mui/material";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carsoul.css";

const ExampleCarousel = () => {
  return (
    <Grid container lg={12} sm={12} md={12}>
      <Grid
        item
        container
        lg={4}
        sm={4}
        md={4}
        style={{ overflow: "hidden", maxHeight: 300, height: "100%" }}
      >
        <Carousel
          style={{ height: "100%" }}
          prevLabel=""
          nextLabel=""
          indicators={false}
        >
          <Carousel.Item>
            <div
              style={{
                background: "yellow",
                width: "500px",
                height: "300px",
                padding: 20,
                backgroundColor: "#f5ffbb",
              }}
            >
              <div>
                <Typography fontSize={25} className="enroll_text">
                  Whats's after 12th
                </Typography>
                <Typography className="enroll_text">
                  How can I get admission from the best
                </Typography>
                <Typography className="enroll_text">
                  Which College to choose
                </Typography>
                <Typography className="enroll_text">
                  Which Career to choose
                </Typography>
                <Typography className="enroll_text">
                  Which Cource to choose
                </Typography>
              </div>
              <br />
              <Typography
                fontSize={25}
                style={{ color: "#E2A165" }}
                className="enroll_text"
              >
                pop out the balloon
              </Typography>
              <Typography
                fontSize={25}
                style={{ color: "#E2A165" }}
                className="enroll_text"
              >
                We are happy to help you
              </Typography>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thestoryscribe.com/wp-content/uploads/2020/08/story-scribe-book-sample-500x375.jpg"
              alt="Second slide"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ifinfralivestorage.blob.core.windows.net/ifservice/77214/208335/00000000-0000-0000-0000-000000000000/01_ZIN_Sample_Book_01.jpg"
              alt="Third slide"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Carousel.Item> */}
        </Carousel>
      </Grid>
      <Grid
        item
        container
        lg={4}
        sm={4}
        md={4}
        style={{ overflow: "hidden", maxHeight: 300, height: "100%" }}
      >
        <Carousel
          style={{ height: "100%" }}
          prevLabel=""
          nextLabel=""
          indicators={false}
        >
          <Carousel.Item>
            <div
              style={{
                background: "yellow",
                width: "500px",
                height: "300px",
                padding: 20,
                backgroundColor: "#9c7c7c3d",
              }}
            >
              <div>
                <Typography
                  style={{ color: "#339fcf" }}
                  fontSize={35}
                  fontWeight={"bold"}
                  className="enroll_text"
                >
                  Best Career Guidance
                </Typography>
                <Typography
                  style={{ color: "#339fcf" }}
                  fontWeight={"bold"}
                  fontSize={35}
                  className="enroll_text"
                >
                  Ever !
                </Typography>
              </div>
              <br />
              <Typography
                fontSize={35}
                fontWeight={"bold"}
                style={{ color: "#c21892" }}
                className="enroll_text"
              >
                From the Top Most
              </Typography>
              <Typography
                fontWeight={"bold"}
                fontSize={35}
                style={{ color: "#c21892" }}
                className="enroll_text"
              >
                Universities
              </Typography>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              // className="d-block w-100"
              src="https://thestoryscribe.com/wp-content/uploads/2020/08/story-scribe-book-sample-500x375.jpg"
              alt="Second slide"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              // className="d-block w-100"
              src="https://ifinfralivestorage.blob.core.windows.net/ifservice/77214/208335/00000000-0000-0000-0000-000000000000/01_ZIN_Sample_Book_01.jpg"
              alt="Third slide"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Carousel.Item> */}
        </Carousel>
      </Grid>
      <Grid
        item
        container
        lg={4}
        sm={4}
        md={4}
        style={{ overflow: "hidden", maxHeight: 300, height: "100%" }}
      >
        <Carousel
          style={{ height: "100%" }}
          prevLabel=""
          nextLabel=""
          indicators={false}
        >
          <Carousel.Item>
            <div
              style={{
                background: "yellow",
                width: "500px",
                height: "300px",
                padding: 40,
                backgroundColor: "white",
              }}
            >
              <Typography fontSize={25} className="enroll_text">
                We help you with
              </Typography>
              <br />
              <Typography
                fontSize={25}
                style={{ color: "green" }}
                className="enroll_text"
              >
                Planning and building
              </Typography>{" "}
              <br />
              <Typography className="enroll_text" sx={{ display: "flex" }}>
                <Typography fontSize={25} style={{ color: "blue" }}>
                  your dream
                </Typography>
                &nbsp;
                <Typography fontSize={25} style={{ color: "orange" }}>
                  career
                </Typography>
              </Typography>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Carousel.Item>
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default ExampleCarousel;
