import React from 'react';

import Layout from '../layouts';

const App = ({ children }) => {
	return (
		<Layout>
			{children}
		</Layout>
	);
};

export default App;