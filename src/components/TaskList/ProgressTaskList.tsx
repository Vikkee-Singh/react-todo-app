
import { initialListInterface } from "../../utils/CommonFun";
interface propsInteface{
    list: Array<initialListInterface>,
    handleDeleteTask: (id:string)=>void,
    handleDragTaskStart:(ev: any, id: string)=>void,
    handleDropTask:(ev: any)=>void
}

function ProgressTaskList(props:propsInteface) {    
    return(
    <div 
        className="progress-container" 
        onDragOver={(evt)=>{
            evt.preventDefault()
        }}
        onDrop={(evt)=>props.handleDropTask(evt)}
    >
        <label className="label">Tasks InPrgress</label>
        <ul id="progress-list" className="progress-list">
            {!!props.list.length && props.list.map(((list: initialListInterface, idx:Number)=>{
                return(
                    <div 
                        className="todo" 
                        draggable={true}
                        id={`progress-${list['id'] || `${idx}`}`}
                        key={list['id'] || `${idx}`}
                        onDragStart={(evt)=>props.handleDragTaskStart(evt, list['id'])}
                    >
                        <li className="todo-item" id={`progress-li-${`${idx}`}`}>
                            <label id={`progress-lebal-${`${idx}`}`}>{list['taskName'] || `${idx}`}</label>
                        </li>
                    <button 
                        className="delete-btn" 
                        onClick={()=>props.handleDeleteTask(list['id'])}
                        id={`progress-delete-${`${idx}`}`}
                    >
                        <i id={`progress-icon-${`${idx}`}`} className="fas fa-trash"></i>
                    </button>
                    </div>
                )
            }))}
        </ul>
    </div>
    )
}

export default ProgressTaskList;
