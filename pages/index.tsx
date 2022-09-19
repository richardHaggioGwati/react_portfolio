import type { NextPage } from 'next';

import Loading from '../components/Design/Loading';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Personal from '../components/Personal';
import TechStack from '../components/TechStack';
import Work from '../components/Work';
import Footer from '../components/Footer';

import useWindowResize from '../hooks/useWindowResize';

const Home: NextPage = () => {
	const { height, width } = useWindowResize();

	console.log(height, width);

	return (
		<>
			{width > 500 ? (
				<>
					<Loading />
					<p
						style={{
							color: 'white',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							fontSize: '35px',
							textAlign: 'center',
						}}
					>
						{' '}
						Please resize window
					</p>
				</>
			) : (
				<>
					<Nav />
					<Header />
					<Personal/>
					<TechStack />
					<Work />
					<Footer />
				</>
			)}
		</>
	);
};

export default Home;
