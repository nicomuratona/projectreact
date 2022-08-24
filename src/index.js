import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RouteApp from './components/App';

import Home from './components/Home/Home';
import News from './components/News/News';
import Info from './components/Info/Info';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Ranking from './components/Ranking/Ranking';
import Shop from './components/Shop/Shop';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path={'/'} element={<RouteApp><Home /></RouteApp>} />
				<Route path={'/news'} element={<RouteApp><News /></RouteApp>} />
				<Route path={'/info'} element={<RouteApp><Info /></RouteApp>} />
				<Route path={'/register'} element={<RouteApp><Register /></RouteApp>} />
				<Route path={'/login'} element={<RouteApp><Login /></RouteApp>} />
				<Route path={'/ranking'} element={<RouteApp><Ranking /></RouteApp>} />
				<Route path={'/shop'} element={<RouteApp><Shop /></RouteApp>} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);