import React, { useState, useEffect } from 'react';
import './Todo.css';
import CreateTask from './components/CreateTask';
import { Button } from 'antd';
import { Typography } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined  } from '@ant-design/icons';



const { Text } = Typography;

const Task = ({task,index,completeTask,removeTask}) => {
    return (
        <div className="task"
             style = {{textDecoration: task.completed ? "line-through":""}}> 
             {task.title}
                <Button 
                    icon={<CloseCircleOutlined />}
                     style={{ background: "red" }} 
                     onClick={() => removeTask(index)}>

                </Button>
                <Button 
                    icon={<CheckCircleOutlined />} 
                    onClick={() => completeTask(index)}>
                </Button>
        </div>
    );
};


const Todo= () => {
    const[tasksRemaining,setTasksRemaining]= useState(0);
    const [tasks,setTasks] = useState([
        {
            title: "New Task",
            completed :true
        },
        {
            title: "Second Task",
            completed: true
        },
        {
            title: "Third Task",
            completed: false
        }
    ]);

    useEffect( () => { 
        setTasksRemaining(tasks.filter(
            task => !task.completed).length)
     });

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks);
    }

    return(
        <div className="todo-container">
            <div className="header"><Text code>Pending tasks({tasksRemaining})</Text></div>
            <div className="tasks">
                {
                    tasks.map((task,index)=>(
                        <Task
                            task = {task}
                            index= {index}
                            key = {index} 
                            completeTask={completeTask}
                            removeTask={removeTask}/>
                    ))   
                }
            </div>
            <div className="create-task">
                <CreateTask addTask={addTask}/>
            </div>
        </div>
    );

};

export default Todo;