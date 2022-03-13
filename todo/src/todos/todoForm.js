import React, { useState} from 'react'
import { db } from '../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import firebase from "firebase" 
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    async function getCities(db) {
      const citiesCol = collection(db, 'todos');
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => doc.data({
        inProgress: true, 
        todo: input
      }));
      return cityList;
  }
  // getCities(db).collection("todos").add({
  //   inProgress: true,
  //     todo: input
  // })
    // db.collection("todos").add({
    //   inProgress: true,
    //   todo: input
    // });

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}
export{
  TodoForm
} 