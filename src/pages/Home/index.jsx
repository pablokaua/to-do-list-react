import { useState } from 'react';
import Header from '../../components/Header';
import InputTask from '../../components/InputTask';
import ResetAll from '../../components/ResetAll';
import TaskList from '../../components/TaskList';
import './styles.css';

function Home() {
  const [inputContent, setInputContent] = useState();
  const [tasksList, setTasksList] = useState([]);

  function handleChangeInput(value){
    setInputContent(value)
  }

  function handleAddTask(){
      const newTask = inputContent;
      if(newTask !== ''){
          setTasksList([...tasksList, newTask]);
      }

      setInputContent('');
      document.querySelector('.input-task input').value = '';
  }

  function handleDeleteTask(indexTask){
    const oldList = [...tasksList];
    const newList = oldList.filter((task, index) => index != indexTask);
    
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
       />
      <TaskList tasksList={tasksList}
                onClick={handleDeleteTask}
      />
      <ResetAll onClick={handleDeleteAllTasks}/>
    </div>
  )
}

export default Home;
