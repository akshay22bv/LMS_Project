import * as React from "react";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import "./Users.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
import { domain } from "../App";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    let access_token = localStorage.getItem("access_token");

    console.log({ access_token });

    fetch(`${domain}/api/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setUsers(data);
        }
        // Handle the data received from the server
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log({ users });

  const rows = [];

  //   rows.push({})

  const CustomNoRowsOverlay = () => {
    return (
      <GridOverlay>
        <div>No data found</div>
      </GridOverlay>
    );
  };

  users &&
    Array.isArray(users) &&
    users.map((item, index) => {
      rows.push({
        id: item._id,
        slno: index + 1,
        name: item.name,
        email: item.email,
        enrolled: item.enrolled,
      });
    });

  const columns = [
    { field: "slno", headerName: "Sl Number", width: 150 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "enrolled",
      headerName: "Enrolled",
      width: 150,
      renderCell: (params) => {
        return params.value ? <CheckIcon /> : <ClearIcon />;
      },
    },
  ];
  return (
    <div>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackIosIcon />
      </Button>
      <div className="datagrid-center">
        <div className="datagrid-container">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            className="custom-datagrid"
            components={{
              NoRowsOverlay: CustomNoRowsOverlay,
            }}
          />
        </div>
      </div>{" "}
    </div>
  );
}
