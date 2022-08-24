import React, { useState } from "react";

import { Layout, Menu } from "antd";
import {
	HomeOutlined,
	NotificationOutlined,
	InfoCircleOutlined,
	UserOutlined,
	TrophyOutlined,
	ShoppingCartOutlined,
} from "@ant-design/icons";

import "./NavBar.css";
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const menuItems = [
	getItem(<Link to="/">Inicio</Link>, '/', <HomeOutlined />),
	getItem(<Link to="/news">Noticias</Link>, '/news', <NotificationOutlined />),
	getItem(<Link to="/info">Información</Link>, '/info', <InfoCircleOutlined />),
	getItem('Usuario', '/user', <UserOutlined />, [
		getItem(<Link to="/register">Registrarse</Link>, '/register'),
		getItem(<Link to="/login">Ingresar</Link>, '/login'),
	]),
	getItem(<Link to="/ranking">Ranking</Link>, '/ranking', <TrophyOutlined />),
	getItem(<Link to="/shop">Shop</Link>, '/shop', <ShoppingCartOutlined />),
];

const NavBar = () => {
	const [collapsed, setCollapsed] = useState(false);
	const location = useLocation();

	return (
		<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
			<div className="logo" />
			<Menu
				theme="dark"
				defaultSelectedKeys={[location.pathname]}
				mode="inline"
				items={menuItems}
			/>
		</Sider>
	);
};

export default NavBar;