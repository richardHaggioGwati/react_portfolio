import type { NextPage } from 'next';
import { useState } from 'react';

import Loading from '../components/Design/Loading';
import Nav from '../components/Nav';

const Home: NextPage = () => {
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 3000);

	return (<>{loading ? <Loading /> : <>
		<Nav />
	</>}</>);
};

export default Home;
