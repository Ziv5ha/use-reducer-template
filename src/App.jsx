import React, { useReducer } from 'react';
import './App.css';
import ListOfFriends from './components/ListOfFriends';
import NewFriend from './components/NewFriend';
import userContext from './context/userContext';
import { db } from './DB';
import userReducer from './reducers/userReducer';

function App() {
  const [list, dispatch] = useReducer(userReducer, db);
  return (
    <userContext.Provider value={{ list, dispatch }}>
      <ListOfFriends />
      <NewFriend />
    </userContext.Provider>
  );
}

export default App;
