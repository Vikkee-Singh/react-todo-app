import TodoTaskList from "./TodoTaskList";
import ProgressTaskList from "./ProgressTaskList";
import DoneTaskList from "./DoneTaskList";
import { initialListInterface } from "../../utils/CommonFun";

interface props{
    taskLists: Array<initialListInterface>,
    handleDeleteTask: (id:string)=>void,
    handleDragTaskStart:(ev: any, id: string)=>void,
    handleDropTask:(ev: any)=>void
}
function TaskList(props:props) {
    
  return (
    <section className="todos-section">

        <TodoTaskList 
            list={
                props.taskLists.filter((list)=>list["position"] === "todo")
            }
            handleDeleteTask={props.handleDeleteTask}
            handleDragTaskStart={props.handleDragTaskStart}
            handleDropTask={props.handleDropTask}
        />
        <ProgressTaskList             
            list={
                props.taskLists.filter((list)=>list["position"] === "progress")
            }
            handleDeleteTask={props.handleDeleteTask}
            handleDragTaskStart={props.handleDragTaskStart}
            handleDropTask={props.handleDropTask}
        />
        <DoneTaskList 
            list={
                props.taskLists.filter((list)=>list["position"] === "done")
            }
            handleDeleteTask={props.handleDeleteTask}
            handleDragTaskStart={props.handleDragTaskStart}
            handleDropTask={props.handleDropTask}
        />
    </section> 
);
}

export default TaskList;
