import './styles.css';

function ResetAll({onClick}){
    return (
        <div className="reset-all">
            <button onClick={e => onClick()}>
            Clean All
            </button>
        </div>
    )
}

export default ResetAll;