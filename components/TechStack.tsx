import Image from 'next/image';

import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import Card from './Design/Card';
import terminal from '../public/terminal.svg';
import design from '../public/Design.svg';
import sun from '../public/sun.svg';

const TechStack = () => {
	const Header = styled(Typography)({
		color: '#ffffff',
		textAlign: 'center',
		margin: '1.2rem 0rem 0rem 0rem',
		fontSize: '2rem',
	});

	const Container = styled(Box)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	});

	const IconContainer = styled(Box)({
		position: 'relative',
		width: '50px',
		height: '50px',
		margin: '19px 0px 0px 0px',
	});

	const SubHeader = styled(Typography)({
		color: '#ffffff',
		margin: '1rem',
	});

	const Text = styled(Typography)({
		color: '#fff',
		margin: '0rem 1.3rem',
		textAlign: 'center',
	});

	const SunContainer = styled(Box)({
		position: 'relative',
		width: '50px',
		height: '50px',
		margin: '3rem 0px 0px 0px',
	});

	return (
		<>
			<Card
				margin='-10px 0rem 0rem 3rem'
				width='16rem'
				height='31rem'
				color='radial-gradient(circle farthest-side, #890048, #540048, #000027)'
			>
				<Header>What I Do</Header>
				<Container>
					<IconContainer>
						<Image
							src={terminal}
							alt='terminal'
							layout='responsive'
							width={21.94}
							height={21.85}
						/>
					</IconContainer>
					<SubHeader>Development</SubHeader>
					<Text>
						I like to code things from scratch, and enjoy bringing ideas to life
						in the browser.
					</Text>
				</Container>

				<Container>
					<IconContainer>
						<Image
							src={design}
							alt='design'
							layout='responsive'
							width={21.94}
							height={21.85}
						/>
					</IconContainer>
					<SubHeader>Designer</SubHeader>
					<Text>
						I value simple content structure, clean design patterns, and
						thoughtful interactions.
					</Text>
				</Container>
			</Card>

			<SunContainer>
				<Image
					src={sun}
					alt='star'
					layout='responsive'
					width={32}
					height={32}
				/>
			</SunContainer>
		</>
	);
};

export default TechStack;
