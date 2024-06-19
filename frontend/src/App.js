import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskBoard from './Components/TaskBoard';
import TaskAddingForm from './Components/TaskAddingForm';
import UserCreateForm from './Components/UserCreateForm';
import LoginForm from './Components/LoginForm';
import SideBar from './Components/SideBar';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
        <Header/>
      <div className="flex ">
    
        <SideBar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<TaskBoard />} />
            <Route path="/tasks/add" element={<TaskAddingForm />} />
            <Route path="/user" element={<UserCreateForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
