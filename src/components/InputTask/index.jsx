import './styles.css';

function InputTask({onChange, onClick, value}){
    return (
            <div className='input-task'>
                <input onChange={e => onChange(e.target.value)}
                       value={value}
                       type="text" 
                       placeholder='write your task'/>
                <button type="button"
                        onClick={onClick}>
                    Add
                </button>
            </div>
    )
}

export default InputTask;