import styled from "@emotion/styled";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "./Firebase";

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

function VideoUploadCloudflare() {
  // dialog open close handle
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
    img && uploadFile(img, "imgUrl");
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

        urlType === "imgUrl"
          ? setImgPerc(Math.round(progress))
          : setVideoPerc(Math.round(progress));

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);

          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  const handleUpload = () => {
    console.log("POST_DATA", inputs);
    handleClose();
  };
  console.log("DATA", { img, video, inputs, imgPerc, videoPerc });

  return (
    <Box sx={{ height: "100%", width: "auto" }}>
      <Button
        onClick={() => {
          setOpenDialog(true);
        }}
        variant="outlined"
      >
        Open
      </Button>

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
            // autoFocus
            // disabled={imgPerc === 100 ? false : true}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default VideoUploadCloudflare;
