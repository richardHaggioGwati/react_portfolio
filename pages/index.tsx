import type { NextPage } from 'next';
import { useState } from 'react';

import Loading from '../components/Design/Loading';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Personal from '../components/Personal';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

//const Window  = dynamic(()=>import("../lib/Window"), {ssr: false} )
import useWindowResize from '../hooks/useWindowResize';

const Home: NextPage = () => {
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 1000);

	const { height, width } = useWindowResize();

	console.log(height, width);
	return (
		<>
			{width > 500 ? (
				<Loading />
			) : (
				<>
					{loading ? (
						<Loading />
					) : (
						<>
							<Nav />
							<Header />
							<Personal />
							<TechStack />
							<Footer />
						</>
					)}
				</>
			)}
		</>
	);
};

export default Home;
