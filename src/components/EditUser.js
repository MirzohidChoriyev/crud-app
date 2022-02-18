import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { Alert } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, editUser, getUsers } from "./Service/api";

const useStyle = makeStyles({
  form: {
    width: "450px",
    margin: "auto",
    marginTop: "80px",
  },
  button: {
    marginTop: "30px",
    background: "green",
    color: "white",
  },
  alert: {
    position: "fixed",
    right: "30px",
    bottom: "30px",
    width: "300px",
  },
});

const initialValues = {
  fullname: "",
  phonenumber: "",
  address: "",
  email: "",
};

function EditUser() {
  const classes = useStyle();
  const location = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  const [user, setUser] = useState(initialValues);
  const { fullname, phonenumber, address, email } = user;

  const inputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const deleteShow = () => {
    setInterval(() => {
      setShow(false);
    }, 5000);
  };

  useEffect(() => {
    deleteShow();
  }, [show]);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const object = await getUsers(id);
    setUser(object.data);
    console.log(object);
    console.log(id);
  };

  const editUsersDetails = async () => {
    await editUser(user, id);
    setShow(true);
    location("/all");
  };

  return (
    <div>
      <FormGroup className={classes.form}>
        <FormControl>
          <InputLabel>Fullname</InputLabel>
          <Input
            onChange={(e) => inputChange(e)}
            name="fullname"
            value={fullname}
          />
        </FormControl>

        <FormControl>
          <InputLabel>Phonenumber</InputLabel>
          <Input
            onChange={(e) => inputChange(e)}
            name="phonenumber"
            value={phonenumber}
          />
        </FormControl>

        <FormControl>
          <InputLabel>Address</InputLabel>
          <Input
            onChange={(e) => inputChange(e)}
            name="address"
            value={address}
          />
        </FormControl>

        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => inputChange(e)} name="email" value={email} />
        </FormControl>

        <Button
          variant="contained"
          onClick={() => editUsersDetails()}
          color="primary"
          className={classes.button}
        >
          Edit user
        </Button>
      </FormGroup>

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

export default EditUser;
