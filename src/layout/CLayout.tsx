import React, { FC, ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { useDispatch } from "react-redux";
import {
  getUserAction,
  loginAction,
} from "../app/store/actions/user/userActions";
import { windowSlice } from "../app/store/slice/window/windowSlice";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

interface CLayoutProps {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),

  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),

  getItem(
    "Group",
    "grp",
    null,
    [getItem("Option 13", "13"), getItem("Option 14", "14")],
    "group"
  ),
];

const { Header, Content, Sider } = Layout;

const CLayout: FC<CLayoutProps> = ({ children }): ReactElement => {
  const dispatch = useAppDispatch();
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const width = useAppSelector((state: RootState) => {
  //   return state.windowReducer.width;
  // });

  // useEffect(() => {
  //   function handleResize() {
  //     dispatch(windowSlice.actions.setDimensions());
  //   }
  //   window.addEventListener("resize", handleResize);
  // });

  // useEffect(() => {
  //   if (localStorage.getItem("access") !== undefined) {
  //     console.log(localStorage.getItem("access"));
  //     dispatch(getUserAction());
  //   }
  // }, []);

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>item 1</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            style={{ height: "100%", borderRight: 0, background: "#fafafa" }}
          >
            <Menu.Item>Kategorije</Menu.Item>
            <Menu.Item>Podkategorije</Menu.Item>
            <Menu.Item>Proizvodi</Menu.Item>
            <Menu.Item>
              <Link to={"/add_product"}></Link>
              Dodaj proizvod
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
            minHeight: "calc(100vh - 64px) ",
          }}
        >
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
              padding: 24,
              margin: 0,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CLayout;
