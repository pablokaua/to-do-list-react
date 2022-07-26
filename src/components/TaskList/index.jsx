import TaskCard from '../TaskCard';
import './styles.css';

function TaskList({tasksList, onClick}){
    return (
        <div className="tasks-cantainer">
        {tasksList.map((task, index) => 
            <TaskCard key={index} 
                      id={index}
                      task={task}
                      onClick={onClick}
            />    
        )}
        </div>
    )
}

export default TaskList;