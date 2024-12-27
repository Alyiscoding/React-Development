import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { First } from 'react-bootstrap/esm/PageItem';

function App() {
  const [fisrt,setName] =  useState("");
  const [last,setNamee] =  useState("");
  const [age,setAge] =  useState(0);
  return (
    <div>
      <label>First Name
      <input type='Text' placeholder='Enter your First Name' onChange={(e)=> setName(e.target.value)} value={fisrt} />
      </label>
      <label>Last Name 
      <input type='Text' placeholder='Enter your Last Name'onChange={(e)=> setNamee(e.target.value)} value={last} />
      </label>
      <label>Age
      <input type='number' placeholder='Enter your Age'onChange={(e)=> setAge(e.target.value)} value={age} />
      </label>

    </div>
  )
}

export default App

