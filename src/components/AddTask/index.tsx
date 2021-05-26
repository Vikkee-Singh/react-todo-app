interface props{
    taskName: string,
    handleChange: Function,
    handleAddTask:(evt:any)=>void
}
function AddTask(props:props) {
    
  return (
    <div className="formContainer">
        <form onSubmit={props.handleAddTask}>
            <input 
                type="text" 
                value={props.taskName} 
                className="todo-input" 
                onChange={({target:{value}})=>props.handleChange(value)}
            />
            <button 
                className="todo-button"
                type="submit"
                // onClick={props.handleAddTask}
            > 
                <i className="fas fa-plus-square"></i> 
            </button>
        </form>
    </div> 
);
}

export default AddTask;
