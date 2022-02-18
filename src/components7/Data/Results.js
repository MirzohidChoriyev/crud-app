import { Button, Modal } from "antd";
import React from "react";
import "../Data/Style.css";
import { formatTime } from "./utils";

function Results({ closeModal, data, results, show, time, natija }) {
  return (
    <Modal
      title="Test natijangiz"
      footer={false}
      visible={show}
      closable={false}
    >
      <ul>
        {results.map((result, index) => (
          <li key={index} className="mb-5">
            <p>
              <strong>
                {index + 1}. {result.questionItem}
              </strong>
            </p>
            <p
              className={
                result.answerItem === data[index].answer
                  ? "has-background-success check-result p-2 mt-2"
                  : "has-background-danger check-result has-text-white p-2 mt-2"
              }
            >
              <strong className="has-text-white strong-space ml-1">
                {result.answerItem}
                <i
                  className={
                    result.answerItem === data[index].answer
                      ? "fa fa-check"
                      : "fa fa-close"
                  }
                  id="check-icon"
                ></i>
              </strong>
            </p>
            {result.answerItem !== data[index].answer && (
              <p className="has-background-link check-result check-link p-2 mt-2">
                To'g'ri javob: {data[index].answer}
              </p>
            )}
          </li>
        ))}
      </ul>

      <div className="result-content mb-5">
        <p className="m-1">
          <strong>Test uchun ketgan vaqt: {formatTime(time)}</strong>
        </p>
        <p className="m-1">
          <strong>Savollar soni: {data.length} ta</strong>
        </p>
        <p className="m-1">
          <strong>To'g'ri javoblar soni: {natija} ta</strong>
        </p>
        <p className="m-1">
          <strong>
            Test natijangiz: {Math.floor((natija / data.length) * 100)}%
          </strong>
        </p>
      </div>

      <button className="download-check">
        <i class="fa fa-download mr-1"></i>Yuklab olish
      </button>
      <button className="close-check" onClick={closeModal}>
        Yopish
      </button>
    </Modal>
  );
}

export default Results;
