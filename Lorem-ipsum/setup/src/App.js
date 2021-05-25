import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    if(count <= 0) {
      alert("Enter positive number")
      amount = 1
    }
    if (count > 8) {
      alert("Can't be more then 8 paragraphs")
      amount = 8
    }
    setText(data.slice(0,amount))
  }
  
  return (
  <section className="section-center">
    <h3>Do you want to generate lorem ipsum?</h3>
    <form onSubmit={handleSubmit} className="lorem-form">
      <label htmlFor="">
        Paragraphs: 
      </label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=>setCount(e.target.value)}/>
      <button className="btn" type="submit">generate</button>
    </form>
    <article className="lorem-ipsum">
      {text.map((item, index)=>{
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
    )
}

export default App;
