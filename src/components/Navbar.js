import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  ListItem,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import "./Navbar.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useNavigate } from "react-router-dom";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../Views/Firebase";
import jwt_decode from "jwt-decode";
import { domain } from "../App";

const Input = styled.input`
  border: 1px solid lightgrey;
  color: gray;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  border: 1px solid lightgrey;
  color: gray;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: transparent;
`;
const Label = styled.label`
  font-size: 14px;
`;

const Navbar = () => {
  const navigate = useNavigate();

  const [access_token, setAccess_token] = useState("");

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("access_token");
    if (tokenFromLocalStorage) {
      setAccess_token(tokenFromLocalStorage);
    } else {
      setAccess_token("");
    }
  }, []);

  const decodedToken = access_token && jwt_decode(access_token);

  const [openDialog, setOpenDialog] = useState(false);
  const handleClose = () => {
    setOpenDialog(false);
    setInputs({});
    setVideo(null);
    setImg(null);
  };
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    video && uploadFile(video, "videoUrl");
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, "imageUrl");
  }, [img]);

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;

    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");

        urlType === "imageUrl"
          ? setImgPerc(Math.round(progress))
          : setVideoPerc(Math.round(progress));

        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  const handleUpload = () => {
    fetch(`${domain}/api/videos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log({ result });
      })
      .catch((error) => {
        console.error(error);
      });

    handleClose();
  };

  return (
    <Grid
      container
      lg={12}
      md={12}
      sm={12}
      xl={12}
      // className="bg-warning"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Grid item className="d-flex">
        <Grid item>
          <ListItem>
            <LibraryBooksIcon />
          </ListItem>
        </Grid>
        <Grid item>
          <ListItem>Categories</ListItem>
        </Grid>
        <Grid item mt={0.5} style={{ borderRadius: "30px" }}>
          <TextField
            size="small"
            placeholder="Search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              style: { borderRadius: "30px" },
            }}
          />
        </Grid>
      </Grid>
      <Grid item className="d-flex" sx={{ cursor: "pointer" }}>
        <Grid item>
          <ListItem>Home</ListItem>
        </Grid>
        {decodedToken && decodedToken.isAdmin && (
          <Grid item>
            <ListItem
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/users");
              }}
            >
              Users
            </ListItem>
          </Grid>
        )}

        {decodedToken && decodedToken.isAdmin && (
          <Grid
            item
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            <ListItem sx={{ cursor: "pointer" }} onClick={() => {}}>
              Upload Videos
            </ListItem>
          </Grid>
        )}
        <Grid item>
          <ListItem>Cources</ListItem>
        </Grid>
        <Grid item>
          <ListItem>Collages</ListItem>
        </Grid>
        <Grid item>
          <ListItem>Contact Us</ListItem>
        </Grid>
        <Grid item>
          <ListItem>
            <ShoppingCartIcon />
          </ListItem>
        </Grid>
        <Grid item>
          <ListItem>
            {access_token ? (
              <Button
                size="small"
                style={{ color: "black", borderRadius: 20, width: "100%" }}
                className="LoginButton"
                onClick={() => {
                  localStorage.removeItem("access_token");
                  alert("Successfully loggedout");
                  setAccess_token("");
                  window.location.reload();
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                size="small"
                style={{ color: "black", borderRadius: 20, width: "100%" }}
                className="LoginButton"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}
          </ListItem>
        </Grid>
        <Grid item>
          <ListItem
            onClick={() => {
              navigate("/signin");
            }}
          >
            <Button
              style={{ color: "white", borderRadius: 20, width: "100%" }}
              variant="contained"
              size="small"
              className="signInButton"
            >
              Sign Up
            </Button>
          </ListItem>
        </Grid>
        <Grid item>
          <ListItem>
            <LanguageIcon />
          </ListItem>
        </Grid>
      </Grid>

      <Dialog
        maxWidth="md"
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Upload Video"}</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Label>Video :</Label>
            {videoPerc > 0 ? (
              "Uploading " + videoPerc + " %"
            ) : (
              <Input
                type="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[0])}
              />
            )}
            <Label>Title :</Label>
            <Input
              type="text"
              placeholder="Title"
              onChange={handleChange}
              name="title"
            />
            <Label>Description :</Label>
            <Textarea
              placeholder="Description"
              rows={7}
              onChange={handleChange}
              name="description"
            />
            <Label>Thumbnail :</Label>
            {imgPerc > 0 ? (
              "Uploading " + imgPerc + " %"
            ) : (
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
              />
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button
            onClick={handleUpload}
            autoFocus
            disabled={
              videoPerc === 100 &&
              imgPerc === 100 &&
              inputs.title &&
              inputs.description
                ? false
                : true
            }
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Navbar;
