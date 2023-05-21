import { Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

const Videos = ({ props }) => {
  const location = useLocation();
  const videoProps = location.state;

  // Access the props as needed
  console.log({ videoProps });

  return (
    <Grid
      container
      lg={12}
      md={12}
      sm={12}
      mt={10}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {videoProps && (
        <Grid item lg={4} sm={4} md={4}>
          <Card sx={{ width: "100%" }}>
            <CardMedia
              component="iframe"
              title={videoProps.title}
              src={videoProps.videoUrl}
              sx={{ height: "300px", width: "100%" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {videoProps.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {videoProps.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
};

export default Videos;
