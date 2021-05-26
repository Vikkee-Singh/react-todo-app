import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialListInterface } from "./utils/CommonFun";
import {generateString, setDataInLocalStore, getDataFromLocalStore} from "./utils/CommonFun";

const initialList: Array<initialListInterface> = [];

function App() {
  const [taskName, setTaskName] = useState("");
  const [taskLists, settaskLists] = useState(initialList);

  useEffect(() => {
    const taskListString = getDataFromLocalStore();
    if (taskListString) {
      const list = JSON.parse(taskListString);
      settaskLists(list);
    }
  }, []);

  const _handleAddTask = (evt: any)=>{
    evt.preventDefault();
    if (taskName !== "") {      
      const newtaskLists = [...taskLists];
      newtaskLists.push({ taskName: taskName, position: "todo", id: generateString(10) });
      settaskLists(newtaskLists);
      setTaskName("");
      setDataInLocalStore(newtaskLists);
    }
  }

  const _handleDeleteTask = (id: string)=>{
    const updatetaskLists = taskLists.filter((list)=>list['id'] !== id);
    settaskLists(updatetaskLists);
    setDataInLocalStore(updatetaskLists);
  }

  const _handleDragTaskStart = (ev: any, id: string) => {
    ev.dataTransfer.setData("id", id);
  }
  const _handleDropTask = (evt: any) => {
    const id = evt.dataTransfer.getData("id");
    const newtaskLists = [...taskLists];
    const findIndex = newtaskLists.findIndex((todo)=> todo['id'] === id);
    if (evt.target['id'].includes('progress')) {
      newtaskLists[findIndex]['position'] = "progress"
    }
    if (evt.target['id'].includes('done')) {
      newtaskLists[findIndex]['position'] = "done"
    }
    if (evt.target['id'].includes('todo')) {
      newtaskLists[findIndex]['position'] = "todo"
    }
    settaskLists(newtaskLists);
    setDataInLocalStore(newtaskLists);
  }

  return (
    <>
      <Header />
      <AddTask 
        taskName={taskName} 
        handleChange={(taskName:string)=>setTaskName(taskName)}
        handleAddTask={_handleAddTask} 
      />
      <TaskList 
        taskLists={taskLists} 
        handleDeleteTask={_handleDeleteTask} 
        handleDragTaskStart={_handleDragTaskStart}
        handleDropTask={_handleDropTask}
      />
    </>
  );
}

export default App;
