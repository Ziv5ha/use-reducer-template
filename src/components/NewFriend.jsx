import React, { useContext, useRef } from 'react';
import userContext from '../context/userContext';

export default function NewFriend() {
  const { list, dispatch } = useContext(userContext);
  const nameRef = useRef('');
  const ageRef = useRef('');
  const addFriend = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    if (!name || !age) return;
    dispatch({ type: 'ADD_FRIEND', payload: { name, age } });
    nameRef.current.value = '';
    ageRef.current.value = '';
  };
  return (
    <form onSubmit={addFriend}>
      Enter Name: <input ref={nameRef} placeholder='Name'></input> <br />
      Enter Age: <input
        ref={ageRef}
        placeholder='Age'
        type='number'
      ></input>{' '}
      <br />
      <button type='submit'>Add Friend</button>
    </form>
  );
}
