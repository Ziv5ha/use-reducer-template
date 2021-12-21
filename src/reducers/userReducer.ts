import { db } from '../DB';

export default function userReducer(
  state: UserType.state,
  action: UserType.action
) {
  switch (action.type) {
    case 'INITIAL_STATE':
      return [...db];

    case 'ADD_FRIEND':
      return [...state, { name: action.payload.name, age: action.payload.age }];

    case 'REMOVE_FRIEND':
      const newArr = state.filter(({ name }) => name !== action.payload.name);
      return newArr;

    case 'UPDATE_FRIEND':
      const updatedArr = state.map(({ name, age }) => {
        if (name === action.payload.queryName) {
          name = action.payload.name;
          age = action.payload.age;
        }
        return { name, age };
      });
      return updatedArr;

    default:
      return state;
  }
}
