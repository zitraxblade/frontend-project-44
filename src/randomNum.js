const randomNum = (minNum = 0, maxNum = 100) => {
  const reuslt = Math.round(Math.random() * (maxNum + minNum));
  return reuslt;
};
export default randomNum;
