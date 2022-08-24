import React from 'react';

import { Layout } from 'antd';

import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

const { Content } = Layout;

const LayoutWithRoute = ({ children }) => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<NavBar />
			<Layout>
				<Header />
				<Content style={{ margin: '20px 16px' }}>{children}</Content>
				<Footer />
			</Layout>
		</Layout>
	);
};

export default LayoutWithRoute;