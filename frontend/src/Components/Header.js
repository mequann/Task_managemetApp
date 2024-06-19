import React from 'react'
import{Dropdown, Menu, Space ,Avatar} from 'antd'
import {
    UserOutlined,
    DownOutlined,
    
  } from "@ant-design/icons";
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
const Header = () => {
  return (
    <nav className="w-full bg-gray-800 p-4 mb-0 flex justify-between items-center">
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
  </nav>
  )
}

export default Header