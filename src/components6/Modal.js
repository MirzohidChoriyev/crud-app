import React from "react";

function Modal({ onClose, results, data }) {
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Your answers</p>
          <button className="delete" onClick={onClose}>
            Close
          </button>
        </header>
        <section className="modal-card-body content">
          <ol>
            {results.map((result, i) => (
              <li key={i} className="mb-6">
                <p>
                  <strong>{result.q}</strong>
                </p>
                <p
                  className={
                    result.a === data[i].answer
                      ? "has-background-success has-text-white p-2"
                      : "has-background-danger has-text-white p-2"
                  }
                >
                  Your answer: {result.a}
                </p>
                {result.a !== data[i].answer && (
                  <p className="has-background-link has-text-white p-2">
                    Correct answer: {data[i].answer}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

export default Modal;
