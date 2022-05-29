import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    if(!name){
      showAlert(true, 'danger', 'please enter value');
    }
    else if(name && isEditing){
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    }
    else{
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const handleChange = (e)=>{
    setName(e.target.value);
  }

  const clearList = ()=>{
    showAlert(true, 'danger', 'You cleared the list');
    setList([]);
    setName('');
  }

  const editItem = (id)=>{
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  }

  const removeItem = (id)=>{
    showAlert(true, 'danger', 'Item removed');
    setList(list.filter((item)=> item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return(
  <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      <h3>grocery bud</h3>
      <div className='form-control'>
        <input
          type='text'
          className='grocery'
          placeholder='e.g. eggs'
          value={name}
          onChange={handleChange}
        />
        <button type='submit' className='submit-btn' >
            {isEditing ? 'Edit' : 'Submit'}
        </button>
      </div>
    </form>
    {list.length > 0 && (
      <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className='clear-btn' onClick={clearList}>
          clear items
        </button>
      </div>
    )}
  </section>
)}

export default App
