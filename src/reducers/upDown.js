const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "Incre":
      return state + action.payload;
    case "Decre":
      return state - 1;
    default:
      return state;
  }
};
export default changeTheNumber;
