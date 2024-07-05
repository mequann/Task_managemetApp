import { Avatar} from 'antd'
import React from 'react'
import project from "../asset/project.png";
import task from "../asset/task.png";
import { Link } from "react-router-dom";
import {
    UserOutlined,
    DownOutlined,
    
  } from "@ant-design/icons";


const SideBar = () => {
  return (
    <div className="w-1/6 bg-white p-4 ml-5 ">
          <div className="m-4">
            <img src={task} alt="Tasks" />
            <Link to="/">Tasks</Link>
          </div>
          <div className="m-4">
            <img src={project} alt="Project" />
            <Link to="/tasks/add">Add new tasks</Link>
          </div>
          <div className="m-4">
            <Avatar shape="circle" icon={<UserOutlined />} />
            <Link to="/user">Users</Link>
          </div>
          <div className="m-4">
            <Avatar shape="circle" icon={<UserOutlined />} />
            <Link to="/logIn">login</Link>
          </div>
        </div>
    

      

        
 
  )
}

export default SideBar
