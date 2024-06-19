import { Dropdown, Menu, Space, Calendar, Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';

const { Panel } = Collapse;

const TaskAddingForm = () => {
  const [priority, setPriority] = useState('Select Priority');
  const [status, setStatus] = useState('Select Status');
  const [deadline, setDeadline] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const priorityOptions = ['High', 'Medium', 'Low'];
  const statusOptions = ['To Be Done', 'In Progress', 'Completed',"Overdue"];

  const handleMenuClick = (setter) => (e) => {
    setter(e.key);
  };

  const handleDateChange = (date) => {
    setDeadline(date ? date.format('YYYY-MM-DD') : null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      title,
      description,
      priority,
      status,
      deadline
    };
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });
  };

  const createMenu = (options, handleClick) => (
    <Menu onClick={handleClick}>
      {options.map((option) => (
        <Menu.Item key={option}>
          {option}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className='flex flex-col items-center p-4'>
      <h1 className='text-2xl font-bold mb-4'>Task Adding Form</h1>
      <form onSubmit={handleSubmit} className='w-full max-w-md space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor="title" className='mb-2 font-medium'>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className='border border-gray-300 rounded p-2'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="description" className='mb-2 font-medium'>Description:</label>
          <TextArea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className='border border-gray-300 rounded p-2'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="priority" className='mb-2 font-medium'>Priority:</label>
          <Dropdown overlay={createMenu(priorityOptions, handleMenuClick(setPriority))} trigger={['click']}>
            <Space className='border border-gray-300 rounded p-2 cursor-pointer'>
              {priority}
              <DownOutlined />
            </Space>
          </Dropdown>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="status" className='mb-2 font-medium'>Status:</label>
          <Dropdown overlay={createMenu(statusOptions, handleMenuClick(setStatus))} trigger={['click']}>
            <Space className='border border-gray-300 rounded p-2 cursor-pointer'>
              {status}
              <DownOutlined />
            </Space>
          </Dropdown>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="deadline" className='mb-2 font-medium'>Deadline:</label>
          <Collapse>
            <Panel header={deadline || "Select Deadline"} key="1">
              <Calendar fullscreen={false} onChange={handleDateChange} />
            </Panel>
          </Collapse>
        </div>

        <button type="submit" className='bg-blue-500 text-white rounded p-2 hover:bg-blue-600'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskAddingForm;
