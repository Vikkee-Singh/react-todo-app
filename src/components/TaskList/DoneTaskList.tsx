
import { initialListInterface } from "../../utils/CommonFun";
interface propsInteface{
    list: Array<initialListInterface>,
    handleDeleteTask: (id:string)=>void,
    handleDragTaskStart:(ev: any, id: string)=>void,
    handleDropTask:(ev: any)=>void
}

function DoneTaskList(props:propsInteface) {    
    return(
    <div 
        className="done-container"
        
        onDrop={(evt)=>props.handleDropTask(evt)}
    >
        <label className="label">Tasks Done</label>
        <ul id="done-list"
            onDragOver={(evt)=>{
                evt.preventDefault()
            }}
            className="done-list"
        >
            {!!props.list.length && props.list.map(((list: initialListInterface, idx:Number)=>{
                return(
                    <div 
                        className="todo" 
                        draggable={true}
                        id={`done-${list['id'] || `${idx}`}`}
                        key={list['id'] || `${idx}`}
                        onDragStart={(evt)=>props.handleDragTaskStart(evt, list['id'])}
                    >
                        <li 
                            className="todo-item"                         
                            id={`done-li-${`${idx}`}`}
                        >
                            <label id={`done-lebal-${`${idx}`}`}>{list['taskName'] || `${idx}`}</label>
                        </li>
                    <button 
                        className="delete-btn"
                        onClick={()=>props.handleDeleteTask(list['id'])}
                        id={`done-delete-${`${idx}`}`}
                    >
                        <i id={`done-icon-${`${idx}`}`} className="fas fa-trash"></i>
                    </button>
                    </div>
                )
            }))}
        </ul>
    </div>
    )
}

export default DoneTaskList;

