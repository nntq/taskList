import React,{useState} from 'react';
import './App.css';
import DeletePopup from './components/DeletePopup';
import Tasks from './components/Tasks';
import TasksDone from './components/TasksDone'


function App() {

  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);
  const [done, setDone] = useState([]);


  const textHandler = (e) => {
    setInputText(e.target.value);
  }

  const newTaskHandler = () => {
    if(inputText!=='')
        setItems([
          ...items,
          {text: inputText, id: Math.random()*1000}
        ]);
    setInputText('');
  }

  return (
    <div className="App">
        
        <header>
        <h1>TaskList</h1>
        <div className="input__task">
            <input onChange={textHandler} type="text" placeholder="Add new task" value={inputText}></input>
            <button onClick={newTaskHandler} type="button">Add</button>
        </div>
      </header>
      <Tasks items={items} setItems={setItems} done={done} setDone={setDone} />
      <TasksDone done={done} setDone={setDone} />
    </div>
  );
}

export default App;
