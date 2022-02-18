import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "./Service/api";

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
});

const initialValues = {
  fullname: "",
  phonenumber: "",
  address: "",
  email: "",
};

function AddUsers() {
  const classes = useStyle();
  const location = useNavigate();
  const [user, setUser] = useState(initialValues);
  const { fullname, phonenumber, address, email } = user;

  const inputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUsersDetails = async () => {
    await addUser(user);
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
          onClick={() => addUsersDetails()}
          color="primary"
          className={classes.button}
        >
          Add user
        </Button>
      </FormGroup>
    </div>
  );
}

export default AddUsers;
