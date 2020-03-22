import React, { useState } from 'react';
import { Input } from 'antd';
import { AppstoreAddOutlined  } from '@ant-design/icons';

const CreateTask = ({addTask}) => {
    const [value,setValue] = useState("");

    const handleSummit = e => {
        e.preventDefault();
        if(!value) return;

        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSummit}>
            <Input 
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange = {e=> setValue(e.target.value)}
            />
        </form>
    );

};

export default CreateTask;