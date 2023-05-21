import { Grid } from "@mui/material";
import React from "react";
import { Carousel } from "react-bootstrap";

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
            <img
              className="d-block w-100"
              src="https://cdn.wallpapersafari.com/71/92/0EVoXb.jpg"
              alt="First slide"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
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
          </Carousel.Item>
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
            <img
              // className="d-block w-100"
              src="https://cdn.wallpapersafari.com/71/92/0EVoXb.jpg"
              alt="First slide"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
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
          </Carousel.Item>
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
            <img
              className="d-block w-100"
              src="https://cdn.wallpapersafari.com/71/92/0EVoXb.jpg"
              alt="First slide"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Carousel.Item>
          <Carousel.Item>
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
          </Carousel.Item>
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default ExampleCarousel;
