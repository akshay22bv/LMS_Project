import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  ListItem,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LanguageIcon from "@mui/icons-material/Language";
import "./Navbar.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
          <ListItem
            onClick={() => {
              navigate("/login");
            }}
          >
            <Button
              size="small"
              style={{ color: "black", borderRadius: 20, width: "100%" }}
              className="LoginButton"
            >
              Login
            </Button>
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
    </Grid>
  );
};

export default Navbar;
