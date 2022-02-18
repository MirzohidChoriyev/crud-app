import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Alert } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "./Service/api";

const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "auto",
    marginTop: "40px",
    marginBottom: "30px",
    border: "1px solid lightgray",
    boxShadow: "0px 0px 5px lightgray",
  },
  thead: {
    "& > *": {
      background: "darkorange",
      color: "white",
    },
  },
  row: {
    "& > *": {
      color: "white",
      fontFamily: "verdana",
      fontWeight: "bolder",
      fontSize: "15px",
    },
  },
  delete: {
    marginLeft: "20px",
  },
  alert: {
    position: "fixed",
    right: "30px",
    bottom: "30px",
    width: "300px",
  },
});

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const classes = useStyle();

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
    console.log(response);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    setShow(true);
    getAllUsers();
  };

  const deleteShow = () => {
    setInterval(() => {
      setShow(false);
    }, 5000);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    deleteShow();
  }, [show]);

  return (
    <div className="allusers">
      <div className="table-container">
        <Table className={classes.table}>
          <TableHead className={classes.thead}>
            <TableRow className={classes.row}>
              <TableCell>ID</TableCell>
              <TableCell>Fullname</TableCell>
              <TableCell>Telephone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Edit / Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item, index) => {
              return (
                <TableRow>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.fullname}</TableCell>
                  <TableCell>{item.phonenumber}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/edit/${item.id}`}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.delete}
                      onClick={() => {
                        deleteUserData(item.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="alert">
        {show && (
          <Alert
            className={classes.alert}
            message="Successfully delete"
            type="success"
            showIcon
          />
        )}
      </div>
      <div className="alert">
        {err && (
          <Alert
            className={classes.alert}
            message="An error occurred"
            type="error"
            showIcon
          />
        )}
      </div>
    </div>
  );
}

export default AllUsers;
