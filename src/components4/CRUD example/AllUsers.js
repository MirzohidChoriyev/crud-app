import * as React from "react";
import "./Style.css";

import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  TableBody,
  Button,
  IconButton,
} from "@material-ui/core";
import { getUsers } from "../../components/Service/api";
import { useEffect } from "react";
import { useState } from "react";
import { deleteUser } from "./api";
import { Link } from "react-router-dom";
import { Alert, Modal } from "antd";

const useStyle = makeStyles({
  color: {
    background: "red",
    color: "white",
  },
  alert: {
    width: "310px",
    boxShadow: "0px 0px 5px gray",
    border: "1px solid white",
    borderRadius: "3px",
  },
});

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [errorDelete, setErrorDelete] = useState(false);
  const [showSave, setShowSave] = useState(false);
  const [errorSave, setErrorSave] = useState(false);
  const [show, setShow] = useState(false);
  const [e, setE] = useState(null);

  const getAllUsers = async () => {
    const response = await getUsers();
    //console.log(response);
    setUsers(response.data);
  };

  const showModal = (i) => {
    setShow(true);
    setE(i);
  };
  const closeModal = () => {
    setShow(false);
  };

  const deleteUserDetails = async () => {
    await deleteUser(e);
    getAllUsers();
    setShowDelete(true);
    alertShow();
    closeModal(false);
  };

  const alertShow = () => {
    // showInterval === true
    setInterval(() => {
      setShowDelete(false);
    }, 3000);
  };
  const getAlert = () => {
    setShowSave(window.localStorage.getItem("showSave"));
    setInterval(() => {
      setShowSave(false);
    }, 3000);
  };
  useEffect(() => {
    getAlert();
  }, []);
  console.log(users);
  useEffect(() => {
    getAllUsers();
  }, []);

  const classes = useStyle();

  return (
    <div>
      <TableContainer
        style={{
          width: "1450px",
          margin: "auto",
          marginTop: "40px",
          marginBottom: "20px",
          borderRadius: "2px",
          boxShadow: "0px 0px 5px gray",
        }}
        className={classes.size}
      >
        <Table>
          <TableHead>
            <TableRow className="table-row-head">
              <TableCell>Id</TableCell>
              <TableCell>Fullname</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phonenumber</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Email address</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell>Workplace</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item, key) => {
              return (
                <TableRow>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.fullname}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.number}</TableCell>
                  <TableCell>{item.course}</TableCell>
                  <TableCell>
                    <u
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => {
                        window.open(`https://${item.email}`, "_blank");
                      }}
                    >
                      {item.email}
                    </u>
                  </TableCell>
                  <TableCell>{item.grade}</TableCell>
                  <TableCell>{item.work}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      component={Link}
                      exact
                      to={`/edit/${item.id}`}
                      style={{ color: "white" }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      className={classes.color}
                      onClick={() => {
                        showModal(item.id);
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
      </TableContainer>

      <Modal
        title="O'chirishni xohlaysizmi"
        visible={show}
        onOk={showModal}
        onCancel={closeModal}
        footer={false}
      >
        <Button
          style={{ marginRight: "7px" }}
          variant="contained"
          color="secondary"
          onClick={() => {
            deleteUserDetails();
          }}
        >
          Ha
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => closeModal()}
        >
          Yo'q
        </Button>
      </Modal>

      <div className="alert">
        {showDelete && (
          <Alert
            className={classes.alert}
            message="Ma'lumot o'chirildi"
            type="success"
            showIcon
            closable
          />
        )}
      </div>
      <div className="alert">
        {errorDelete && (
          <Alert
            className={classes.alert}
            message="Ma'lumot saqlanmadi"
            type="error"
            showIcon
            closable
          />
        )}
      </div>
      <div className="alert">
        {showSave && (
          <Alert
            className={classes.alert}
            message="Ma'lumot saqlandi"
            type="success"
            showIcon
            closable
          />
        )}
      </div>
      <div className="alert">
        {errorSave && (
          <Alert
            className={classes.alert}
            message="Ma'lumot saqlanmadi"
            type="error"
            showIcon
            closable
          />
        )}
      </div>
    </div>
  );
}

export default AllUsers;
