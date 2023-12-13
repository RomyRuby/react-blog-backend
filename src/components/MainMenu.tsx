import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {  useDispatch } from "react-redux"


type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
  {
    label: "博客报表",
    key: '/page1',
    icon: <PieChartOutlined />
  },
  {
    label: "博文管理",
    key: '/page2',
    icon: <DesktopOutlined />
  },
  // {
  //   label: "栏目3",
  //   key: 'page3',
  //   icon: <UserOutlined />,
  //   children: [
  //     {
  //       label: "栏目 301",
  //       key: '/page3/page301'
  //     },
  //   ]
  // }
];


const Comp: React.FC = () => {
 const dispatch = useDispatch()

  //获取当前路由路径
  const currentRoute = useLocation()
  

  //设置默认选中和展开菜单
  let firstOpenKey: string = "";
  function findKey(obj: { key: string }) {
    return obj.key === currentRoute.pathname
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i]!['children']?.find(findKey)) {
      firstOpenKey = items[i]?.key as string;
      console.log('设置')
      break
    }
  }

  //设置展开菜单
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  const handleOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]])
  };

  //点击跳转到路由,并记录当前菜单状态 
  const navigateTo = useNavigate()
  const menuClick = (e: { key: string }) => {
    navigateTo(e.key)
    dispatch({ type: "handleClickMenu", val: e })
  }

  return (
    <Menu theme="dark" defaultSelectedKeys={[currentRoute.pathname]} mode="inline" items={items} onClick={menuClick} openKeys={openKeys} onOpenChange={handleOpenChange} />
  )
}


export default Comp;