import type { NextPage } from 'next';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Personal from '../components/Personal';
import TechStack from '../components/TechStack';
import Work from '../components/Work';
import Footer from '../components/Footer';
import Ideas from '../components/Ideas';

import Container from '@mui/system/Container';

const Home: NextPage = () => {
	return (
		<>
			<Nav />
			<Container maxWidth='xl'>
				<Header />
				<Personal />
				<TechStack />
				<Work />
				<Ideas />
			</Container>
			<Footer />
		</>
	);
};

export default Home;
