import React, { useContext } from 'react';
import userContext from '../context/userContext';
import { nanoid } from 'nanoid';
import Toggle from './Toggle';
import UpdateFriend from './EditFriend';

export default function ListOfFriends() {
  const { list, dispatch } = useContext(userContext);

  const listJSX = list.map(({ name, age }) => (
    <div key={nanoid()}>
      Name: {name} | Age: {age}
      <button
        onClick={() => {
          dispatch({ type: 'REMOVE_FRIEND', payload: { name, age } });
        }}
      >
        Remove
      </button>
      <Toggle>
        <UpdateFriend queryName={name} />
      </Toggle>
    </div>
  ));
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'INITIAL_STATE' });
        }}
      >
        Initial State
      </button>
      {listJSX}
    </div>
  );
}
