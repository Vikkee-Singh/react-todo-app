import { initialListInterface } from "../../utils/CommonFun";
interface propsInteface{
    list: Array<initialListInterface>,
    handleDeleteTask: (id:string)=>void,
    handleDragTaskStart:(ev: any, id: string)=>void,
    handleDropTask:(evt: any)=>void
}

function TodoTaskList(props:propsInteface) {    
    return(
    <div 
        className="todo-container" 
        onDragOver={(evt)=>{
            evt.preventDefault()
        }}
        onDrop={(evt)=>props.handleDropTask(evt)}
    >
        <label className="label">Tasks Todo</label>
        <ul id="todo-list" className="todo-list">
            {!!props.list.length && props.list.map(((list: initialListInterface, idx:Number)=>{
                return(
                    <div 
                    className="todo" 
                    draggable={true}
                    id={`todo-${list['id'] || `${idx}`}`}
                    key={list['id'] || `${idx}`}
                    onDragStart={(evt)=>props.handleDragTaskStart(evt, list['id'])}
                >
                    <li className="todo-item" id={`todo-li-${`${idx}`}`}>
                        <label id={`todo-lebal-${`${idx}`}`} >{list['taskName'] || `${idx}`}</label>
                    </li>
                <button 
                    className="delete-btn" 
                    onClick={()=>props.handleDeleteTask(list['id'])}
                    id={`todo-delete-${`${idx}`}`}
                >
                    <i id={`todo-icon-${`${idx}`}`} className="fas fa-trash"></i>
                </button>
                </div>
                )
            }))}
        </ul>
    </div>
    )
}

export default TodoTaskList;
