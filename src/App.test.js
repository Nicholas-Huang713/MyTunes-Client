// import { render, screen, fireEvent, cleanup } from '@testing-library/react';
// import {Provider} from 'react-redux'
// import {createStore} from 'redux';
import { render, fireEvent } from './test-utils';
import App from './App';


// afterEach(cleanup);

// const startingState = {
//   userData: {},
//   faveIdList: []
// }

// function reducer(state = startingState, action) {
//   switch(action.type) {
//     case "SET_DATA":
//       return {...state, userData: action.payload}
//     default: 
//     return state;
//   } 
// }

// function renderWithRedux(
//   component,
//   {initialState, store = createStore(reducer, initialState)} = {}
// ) {
//   return {
//     ...render(<Provider store={store}>{component}</Provider>)
//   }
// } 

it("renders with redux", () => {
  const {getByTestId} = render(<App />);
  expect(getByTestId("app")).not.toBeNull()
})