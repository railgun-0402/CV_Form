import React, { useState } from 'react'
import './Home.scss';

const Home = () => {
    const [name, setName] = useState("");
  return (
    <div className='container'>
        <div className='name'>
            名前を入力：
            <input 
            value={name}
            onChange={(event) => setName(event.target.value)}
            />  
            <p>{name}</p>
        </div>
    </div>
  );
}

export default Home;