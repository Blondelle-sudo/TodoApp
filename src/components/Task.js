import React from 'react';
import { Button } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const Task = ({ task, index, completeTask, removeTask }) => {
    return (
        <div className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}>
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
export default Task;