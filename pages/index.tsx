import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Loading from '../components/Design/Loading';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Personal from '../components/Personal';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

//const Window  = dynamic(()=>import("../lib/Window"), {ssr: false} )
import useWindowResize from '../hooks/useWindowResize';

const Home: NextPage = () => {
	const { height, width } = useWindowResize();

	console.log(height, width);
	return (
		<>
			{width > 400 ? (
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
	);
};

export default Home;
