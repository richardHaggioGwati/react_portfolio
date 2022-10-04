import RiveScene from './Design/RiveScene';

import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import theme from './Design/theme';

import classes from './Design/Rive.module.css';

const Personal: React.FC = () => {
	const Container = styled(Box)({
		display: 'flex',
		justifyText: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '2rem',
		[theme.breakpoints.up('sm')]: {
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

	const Text = styled(Typography)({
		color: '#000027',
		textAlign: 'center',
		fontSize: 'clamp(1.1rem, 0.5rem + 1.5vw, 2rem)',
		fontWeight: '500',
		margin: '25px 15px',
		padding: '0 50px 0px 50px',
		[theme.breakpoints.down('md')]: {
			padding: '10px',
		},
	});

	const ImageContainer = styled(Box)({
		display: 'flex',
		minWidth: '60vh',
		padding: '20px',
		margin: '15px -30px 25px 0px',
		[theme.breakpoints.down('md')]: {
			minWidth: '50%',
			padding: '0px 30px 0px 30px',
			margin: '20px ',
			display: 'none',
		},
	});

	const MobileContainer = styled(Box)({
		display: 'none',
		[theme.breakpoints.down('md')]: {
			minWidth: '50%',
			padding: '0px 30px 0px 30px',
			margin: '20px ',
			display: 'flex',
		},
	});

	return (
		<Container>
			
			<ImageContainer>
				<RiveScene
					src='avatar.riv'
					stateMachine='avatar2'
					hoverState='isHappy'
					animation='idlePreview'
					cssClass={classes.face}
				/>
			</ImageContainer>

			<TextContainer flex={12}>
				<Header>
					Hi I&apos;m Richard, <br />
					Nice to meet you.
				</Header>

			<MobileContainer>
				<RiveScene
					src='avatar.riv'
					stateMachine='avatar2'
					hoverState='isHappy'
					animation='idlePreview'
					cssClass={classes.face}
				/>
				</MobileContainer>
				
				<Text>
					I&apos;ve been working as a freelance developer for a year now, I have
					a peaceful sense of assurance, am innately interested and am
					constantly trying to get better at development and design by solving
					one challenge at a time.
				</Text>
			</TextContainer>

		</Container>
	);
};

export default Personal;
