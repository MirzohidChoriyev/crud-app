import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const accaunt = useSelector((state) => state.accaunt);
  console.log(accaunt);
  const dispatch = useDispatch();

  const { dispatchMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h1>{accaunt}</h1>
      <button>Deposit</button>
      <button>Withdraw</button>
    </div>
  );
}

export default App;
