import { useState } from 'react';
import Header from '../../components/Header';
import InputTask from '../../components/InputTask';
import ResetAll from '../../components/ResetAll';
import TaskList from '../../components/TaskList';
import './styles.css';

function Home() {
  const [inputContent, setInputContent] = useState('');
  const [tasksList, setTasksList] = useState([]);

  function handleChangeInput(value){
    setInputContent(value)
  }

  function handleAddTask(){
      const newTask = inputContent;
      if(newTask.trim().length !== 0){
          setTasksList([...tasksList, newTask]);
      }
      setInputContent('');
  }

  function handleDeleteTask(indexTask){
    const newList = [...tasksList];
    newList.splice(indexTask, 1);
    setTasksList(newList);
  }

  function handleDeleteAllTasks(){
    const newList = [];
    setTasksList(newList);
  }

  return (
    <div className="home">
      <Header />
      <InputTask  onChange={handleChangeInput}
                  onClick={handleAddTask}
                  value={inputContent}
       />
      <TaskList tasksList={tasksList}
                onClick={handleDeleteTask}
      />
      <ResetAll onClick={handleDeleteAllTasks}/>
    </div>
  )
}

export default Home;
