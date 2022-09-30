import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import theme from './Design/theme';

import holder from '../public/Holder.svg';

const Personal: React.FC = () => {

	const Container = styled(Box)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '2rem',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	});

	const TextContainer = styled(Box)({
		display: 'flex',
		color: '#fff',
		marginTop: '-17px',
		flexDirection: 'column',
	});

	const Header = styled(Typography)({
		color: '#000027',
		textAlign: 'center',
		fontSize: ' clamp(2rem, 1rem + 1.5vw, 6rem)',
		padding: '30px 30px 0px 30px',
		fontWeight: '500',
		margin: '1rem 1.5rem 0rem 1.5rem',
		[theme.breakpoints.down('md')]: {
			padding: '0px',
		},
	});

	const Content = styled(Typography)({
		color: '#000027',
		textAlign: 'center',
		fontSize: 'clamp(0.5rem, 0.5rem + 4vw, 2rem)',
		fontWeight: '400',
		margin: '25px 15px',
		padding: '0 50px 0px 50px',
		[theme.breakpoints.down('md')]: {
			padding: '0px',
		},
	});

	const ImageContainer = styled(Box)({
		minWidth: '60vh',
		padding: '20px',
		margin: '15px -30px 25px 0px',
		zIndex: '1',
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	});

	return (
		<Container>
				<ImageContainer>
					<Image
						src={holder}
						alt='Avater'
						layout='responsive'
						width={419}
						height={432}
						loading='lazy'
					/>
				</ImageContainer>
				
				<TextContainer flex={12}>
					<Header>Hi I&apos;m Richard, <br/>Nice to meet you.</Header>

					<Content>
						I&apos;ve been working as a freelance developer for a year now, I
						have a peaceful sense of assurance, am innately interested and am
						constantly trying to get better at development and design by solving
						one challenge at a time.
					</Content>
				</TextContainer>

		</Container>
	);
};

export default Personal;
