import Item from "antd/lib/list/Item";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { addQuestions, editQuestions, getQuestions } from "./api";
import "./Style.css";

const initialValues = {
  que: "",
  ans1: "",
  ans2: "",
  ans3: "",
  ans4: "",
  ans: "A",
  fanId: 100,
  sinfId: 10,
  fanName: "",
};

function EditUsers() {
  const [question, setQuestion] = useState(initialValues);
  const { que, ans1, ans2, ans3, ans4, ans, fanId, sinfId, fanName } = question;
  const pathname = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getEditData();
  }, []);

  const getEditData = async () => {
    const response = await getQuestions(id);
    setQuestion(response.data);
    console.log(id);
  };

  const onChangeInput = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };
  console.log(question);

  const editObject = async () => {
    await editQuestions(id, question);
    pathname("/alluser");
  };

  return (
    <div className="adduser">
      <div className="add-container">
        <button
          type="button"
          class="btn btn-dark mb-4"
          onClick={() => editObject()}
        >
          Tahrirlash
        </button>
        <form>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div class="mb-3">
                <label for="floatingTextarea2" className="mb-2">
                  Savolni kiriting
                </label>
                <textarea
                  class="form-control"
                  placeholder=".........."
                  name="que"
                  value={que}
                  onChange={(e) => onChangeInput(e)}
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div class="mb-3">
                <label className="mb-2" for="floatingTextarea2">
                  Birinchi javobni kiriting
                </label>
                <textarea
                  class="form-control"
                  placeholder=".........."
                  name="ans1"
                  value={ans1}
                  onChange={(e) => onChangeInput(e)}
                  id="floatingTextarea2"
                  style={{ height: "80px" }}
                ></textarea>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div class="mb-3">
                <label className="mb-2" for="floatingTextarea2">
                  Ikkinchi javobni kiriting
                </label>
                <textarea
                  class="form-control"
                  placeholder=".........."
                  id="floatingTextarea2"
                  name="ans2"
                  value={ans2}
                  onChange={(e) => onChangeInput(e)}
                  style={{ height: "80px" }}
                ></textarea>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div class="mb-3">
                <label className="mb-2" for="floatingTextarea2">
                  Uchinchi javobni kiriting
                </label>
                <textarea
                  class="form-control"
                  placeholder=".........."
                  id="floatingTextarea2"
                  name="ans3"
                  value={ans3}
                  onChange={(e) => onChangeInput(e)}
                  style={{ height: "80px" }}
                ></textarea>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div class="mb-3">
                <label for="floatingTextarea2" className="mb-2">
                  To'rtinchi javobni kiriting
                </label>
                <textarea
                  class="form-control"
                  placeholder=".........."
                  id="floatingTextarea2"
                  name="ans4"
                  value={ans4}
                  onChange={(e) => onChangeInput(e)}
                  style={{ height: "80px" }}
                ></textarea>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <label className="mb-2">To'g'ri javobni tanlang</label>
              <select
                class="form-select"
                name="ans"
                value={ans}
                onChange={(e) => onChangeInput(e)}
              >
                <option value="A">Birinchi javob</option>
                <option value="B">Ikkinchi javob</option>
                <option value="C">Uchinchi javob</option>
                <option value="D">To'rtinchi javob</option>
              </select>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Sinf 'id' sini kiriting
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="sinfId"
                  value={sinfId}
                  onChange={(e) => onChangeInput(e)}
                  aria-describedby="emailHelp"
                />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Fanni 'id' sini kiriting
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="fanId"
                  value={fanId}
                  onChange={(e) => onChangeInput(e)}
                  aria-describedby="emailHelp"
                />
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
}

export default EditUsers;
