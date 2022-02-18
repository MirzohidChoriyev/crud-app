import { keys } from "@material-ui/core/styles/createBreakpoints";
import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteQuestion, getQuestions } from "./api";
import "./Style.css";

function AllUsers() {
  const [data, setData] = useState([]);
  const [fullString, setFullString] = useState("");
  const [show, setShow] = useState(false);
  const getData = async () => {
    const response = await getQuestions();
    setData(response.data);
  };

  const removeData = async (i) => {
    await deleteQuestion(i);
    getData();
  };

  const fullShowModal = (string) => {
    setFullString(string);
    setShow(true);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="all-users">
      <table>
        <tr>
          <th>T/R</th>
          <th>QueId</th>
          <th>Sciesce id</th>
          <th>Class id</th>
          <th>Fan nomi</th>
          <th>Question</th>
          <th>Answer1</th>
          <th>Answer2</th>
          <th>Answer3</th>
          <th>Answer4</th>
          <th>Answer</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {data.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.fanId}</td>
              <td>{item.sinfId}</td>
              <td>{item.fanName}</td>
              <td>
                <div>
                  {item.que.substring(0, 25)} ...
                  <i
                    class="fa fa-edit ml-1 text-info"
                    onClick={() => {
                      fullShowModal(item.que);
                    }}
                  ></i>
                </div>
              </td>
              <td>
                {item.ans1.substring(0, 10)} ...
                <i
                  class="fa fa-edit ml-1 text-info"
                  onClick={() => {
                    fullShowModal(item.ans1);
                  }}
                ></i>
              </td>
              <td>
                {item.ans2.substring(0, 10)} ...
                <i
                  class="fa fa-edit ml-1 text-info"
                  onClick={() => {
                    fullShowModal(item.ans2);
                  }}
                ></i>
              </td>
              <td>
                {item.ans3.substring(0, 10)} ...
                <i
                  class="fa fa-edit ml-1 text-info"
                  onClick={() => {
                    fullShowModal(item.ans3);
                  }}
                ></i>
              </td>
              <td>
                {item.ans4.substring(0, 10)} ...
                <i
                  class="fa fa-edit ml-1 text-info"
                  onClick={() => {
                    fullShowModal(item.ans4);
                  }}
                ></i>
              </td>
              <td>{item.ans}</td>
              <td className="text-center">
                <Link to={`/edituser/${item.id}`}>
                  <button id="edit-btn">Edit</button>
                </Link>
              </td>
              <td className="text-center">
                <button id="delete-btn" onClick={() => removeData(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <Modal
        title={"To'liq ma'lumot"}
        footer={false}
        visible={show}
        style={{ position: "relative" }}
        closable={false}
      >
        <span style={{ color: "black", fontWeight: "500", fontSize: "17px" }}>
          {fullString}
        </span>
        <Button
          style={{ position: "absolute", top: "13px", right: "20px" }}
          type="primary"
          danger
          onClick={() => setShow(false)}
        >
          Yopish
        </Button>
      </Modal>
    </div>
  );
}

export default AllUsers;
