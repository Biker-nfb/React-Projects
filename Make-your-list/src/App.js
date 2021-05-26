import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

//check if there are anything in the local storage

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editingID, setEditingID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg:'', type: ''})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, 'danger', 'Please enter something')
    }
    else if (name && isEditing) {
      // deal with edit
      setList(list.map((item)=>{
        if(item.id === editingID){
          return {...item, title:name}
        }
        return item
      }))
      setName('')
      setEditingID(null);
      setIsEditing(false)
      showAlert(true, 'success', 'wish changed')
    }
    else {
      // show alert
      showAlert(true, 'success', 'Your wish has been added')
      const newItem = {id: new Date().getTime().toString(),title: name};
      setList([...list, newItem])
      setName('')
    }
  }

const showAlert = (show=false, type='', msg='') => {
  setAlert({show, type, msg})
  
}

const clearList = () => {
  showAlert(true, 'danger', 'empty list')
  setList([])
}

const removeItem = (id) => {
  showAlert(true, 'danger', 'item removed!')
  setList(list.filter((item)=>item.id != id))
}

const editItem = (id) => {
  const specifitItem = list.find((item) => item.id === id)
  setIsEditing(true)
  setEditingID(id)
  setName(specifitItem.title)
}

useEffect(() => {
  localStorage.setItem('list', JSON.stringify(list))
  
}, [list])

  return <section className="section-center">
    <form onSubmit={handleSubmit} className="grocery-form">

      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}

      <h3>Whish list</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="What do you wish?" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button className="submit-btn" type="submit">
          {isEditing ? 'editing': 'submit'}
        </button>
      </div>
    </form>
    {list.length > 0 && (<div className="grocery-container">
      <List items={list} removeItem={removeItem} editItem={editItem}/>
      <button className="clear-btn" onClick={clearList} >Clear items</button>
    </div>)}
    
  </section>
}

export default App
