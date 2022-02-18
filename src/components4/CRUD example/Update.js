import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUsers, getUsers, saveUsers } from "./api";
import "./Style.css";

const initialValues = {
  fullname: "",
  address: "Buxoro viloyati",
  number: "",
  course: 1,
  email: "",
  work: "Student",
  grade: 3,
};

function AddUsers() {
  const [user, setUser] = useState(initialValues);
  const { fullname, address, number, course, email, work, grade } = user;
  const { id } = useParams();
  console.log(id);

  const allpathname = useNavigate();

  const loadUserData = async () => {
    const response = await getUsers(id);
    setUser(response.data);
    console.log(id);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const onValueChange = (e) => {
    //console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);

  const editUser = async () => {
    await editUsers(id, user);
    allpathname("/all");
  };

  return (
    <div>
      <div className="add">
        <form className="form">
          <div className="row">
            <div className="col-lg-6">
              <div class="mb-3">
                <label for="fullname" class="form-label">
                  Fullname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  aria-describedby="emailHelp"
                  onChange={(e) => onValueChange(e)}
                  name="fullname"
                  value={fullname}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={(e) => onValueChange(e)}
                  name="email"
                  value={email}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div class="mb-3">
                <label for="number" class="form-label">
                  Phone number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="number"
                  aria-describedby="emailHelp"
                  onChange={(e) => onValueChange(e)}
                  name="number"
                  value={number}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div class="mb-3">
                <label for="address" class="form-label">
                  Address
                </label>
                <select
                  class="form-select"
                  id="address"
                  aria-label="Default select example"
                  onChange={(e) => onValueChange(e)}
                  name="address"
                  value={address}
                >
                  <option>Buxoro viloyati</option>
                  <option>Qashqadaryo viloyati</option>
                  <option>Samarqand viloyati</option>
                  <option>Jizzax viloyati</option>
                  <option>Toshkent viloyati</option>
                  <option>Sirdaryo viloyati</option>
                  <option>Toshkent shahri</option>
                </select>
              </div>
            </div>

            <div className="col-lg-6">
              <div class="mb-3">
                <label for="grade" class="form-label">
                  Grade
                </label>
                <select
                  class="form-select"
                  id="grade"
                  aria-label="Default select example"
                  onChange={(e) => onValueChange(e)}
                  name="grade"
                  value={grade}
                >
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div class="mb-3">
                <label for="course" class="form-label">
                  Course
                </label>
                <select
                  class="form-select"
                  id="course"
                  aria-label="Default select example"
                  onChange={(e) => onValueChange(e)}
                  name="course"
                  value={course}
                >
                  <option value={1}>1 - Course</option>
                  <option value={2}>2 - Course</option>
                  <option value={3}>3 - Course</option>
                  <option value={4}>4 - Course</option>
                </select>
              </div>{" "}
            </div>
            <div className="col-lg-6">
              <div class="mb-3">
                <label for="work" class="form-label">
                  Workplace
                </label>
                <select
                  class="form-select"
                  id="work"
                  aria-label="Default select example"
                  onChange={(e) => onValueChange(e)}
                  name="work"
                  value={work}
                >
                  <option value="Student">Student</option>
                  <option value="Director">Director</option>
                  <option value="Teacher">Teacher</option>
                </select>
              </div>
            </div>
          </div>

          <div className="button-c">
            <button
              type="button"
              onClick={() => {
                editUser();
              }}
              class="btn btn-warning text-center button"
            >
              Edit student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUsers;
