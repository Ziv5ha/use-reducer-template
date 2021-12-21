import React, { useContext, useRef } from 'react';
import userContext from '../context/userContext';

export default function UpdateFriend({ queryName }) {
  const { list, dispatch } = useContext(userContext);
  const nameRef = useRef('');
  const ageRef = useRef('');
  const editFriend = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    if (!name || !age) return;
    dispatch({ type: 'UPDATE_FRIEND', payload: { name, age, queryName } });
    nameRef.current.value = '';
    ageRef.current.value = '';
  };
  return (
    <form onSubmit={editFriend}>
      Enter Name: <input ref={nameRef} placeholder='Name'></input> <br />
      Enter Age: <input
        ref={ageRef}
        placeholder='Age'
        type='number'
      ></input>{' '}
      <button type='submit'>Edit Friend</button>
    </form>
  );
}
