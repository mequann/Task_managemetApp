import React from "react";
import {
  UserOutlined,
  DownOutlined,
  AudioOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Space,
  Dropdown,
  Input,
  Button,
  Card,
  Col,
  Row,
  Menu,
  List,
} from "antd";
import filter from "../asset/filter.png";
import project from "../asset/project.png";
import task from "../asset/task.png";
import { Link } from "react-router-dom";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);

// Dummy data for tasks
const tasks = [
  {
    title: "Task 1",
    description: "This is the description for task 1.",
    priority: "High",
    deadline: "2024-06-20",
    status: "To Be Done",
  },
  {
    title: "Task 2",
    description: "This is the description for task 2.",
    priority: "Medium",
    deadline: "2024-06-22",
    status: "In Progress",
  },
  {
    title: "Task 3",
    description: "This is the description for task 3.",
    priority: "Low",
    deadline: "2024-06-25",
    status: "Completed",
  },
  {
    title: "Task 4",
    description: "This is the description for task 4.",
    priority: "High",
    deadline: "2024-06-10",
    status: "Overdue",
  },
  {
    title: "Task 5",
    description: "This is the description for task 5.",
    priority: "Medium",
    deadline: "2024-07-01",
    status: "To Be Done",
  },
  {
    title: "Task 6",
    description: "This is the description for task 6.",
    priority: "Low",
    deadline: "2024-07-05",
    status: "Overdue",
  },
  {
    title: "Task 7",
    description: "This is the description for task 6.",
    priority: "Low",
    deadline: "2024-07-05",
    status: "In Progress",
  },
  {
    title: "Task 8",
    description: "This is the description for task 6.",
    priority: "Low",
    deadline: "2024-07-05",
    status: "Completed",
  },
];

// Menu for the card's three-dot menu
const cardMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">Action 1</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">Action 2</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Action 3</Menu.Item>
  </Menu>
);

// Function to get Tailwind CSS class based on priority
const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case "high":
      return "text-red-600"; 
    case "medium":
      return "text-yellow-500"; 
    case "low":
      return "text-green-600"; 
    default:
      return ""; 
  }
};

function TaskBoard() {
  // Function to render tasks by status in a structured tabular format
  const renderTasksByStatus = () => {
    const statuses = ["To Be Done", "In Progress", "Completed", "Overdue"];

    return statuses.map((status, index) => {
      const filteredTasks = tasks.filter((task) => task.status === status);

      return (
        <Col span={6} key={index}>
          <Card title={status} bordered={false}>
            <List
              dataSource={filteredTasks}
              renderItem={(task, index) => (
                <List.Item key={index} className="">
                  <Card
                    title={task.title}
                    extra={
                      <Dropdown overlay={cardMenu} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                          <EllipsisOutlined />
                        </a>
                      </Dropdown>
                    }
                    bordered={true}
                  >
                    <p>
                      <strong>Description:</strong> {task.description}
                    </p>
                    <p className={getPriorityColor(task.priority)}>
                      <strong>Priority:</strong> {task.priority}
                    </p>
                    <p>
                      <strong>Deadline:</strong> {task.deadline}
                    </p>
                  </Card>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      );
    });
  };

  return (
    <div className="min-h-screen bg-customGray">
      {/* <nav className="w-full bg-gray-800 p-4 mb-0 flex justify-between items-center">
        <Space size={24}>
          <Avatar shape="circle" icon={<UserOutlined />} />
          <h6 className="text-white">hello ! user@gmail.com</h6>
        </Space>
        <Space size={24}>
          <Avatar shape="circle" icon={<UserOutlined />} />
          <Dropdown overlay={<Menu items={items} />} trigger={["click"]}>
            <a
              onClick={(e) => e.preventDefault()}
              className="flex items-center text-white"
            >
              <Space>
                Click me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Space>
      </nav> */}

      <div className="flex">
        {/* Sidebar */}
        {/* <div className="w-1/6 bg-white">
          <div className="m-4">
            <img src={task} alt="Tasks" />
            <Link to="/">Tasks</Link>
          </div>
          <div className="m-4">
            <img src={project} alt="Project" />
            <Link to="/tasks/add">Projects</Link>
          </div>
          <div className="m-4">
            <Avatar shape="circle" icon={<UserOutlined />} />
            <Link to="/users">Users</Link>
          </div>
          <div className="m-4">
            <Avatar shape="circle" icon={<UserOutlined />} />
            <Link to="/logIn">login</Link>
          </div>
        </div> */}

        {/* Main Content */}
        <div className="w-5/6 mt-9 ">
          <h1 className="text-2xl font-bold mb-4 text-center">TaskBoard</h1>
          <div className="flex justify-between">
            <Space direction="vertical" className="mb-8 ml-4 p-4">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                size="large"
                allowClear
                enterButton
              />
            </Space>

            <Space direction="vertical" className="mb-8 ml-4 p-4">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                size="large"
                allowClear
                enterButton={
                  <Button icon={<img src={filter} alt="Filter" />} />
                }
              />
            </Space>
          </div>
          <div className="ml-4">
            <Row gutter={[16, 16]}>
              {/* Render columns for each status */}
              {renderTasksByStatus()}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskBoard;
