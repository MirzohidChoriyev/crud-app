const formatTime = (time) => {
  if (time >= 60) {
    return Math.floor(time / 60) + " m" + (time % 60) + " s";
  } else {
    return time < 10 ? `0${time} s` : `${time} s`;
  }
};

export { formatTime };
