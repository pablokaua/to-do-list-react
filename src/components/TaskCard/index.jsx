import './styles.css';

function TaskCard({task, onClick, id}){
    return (
        <div className="task-card">
            <div className="text-card">{task}</div>
            <i className="fa-solid fa-trash-can" onClick={e => onClick(id)}></i>
        </div>
    )
}

export default TaskCard;