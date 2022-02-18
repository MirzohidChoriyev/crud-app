export const dispatchMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "dispatch",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};
