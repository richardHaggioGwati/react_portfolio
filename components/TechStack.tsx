import RiveScene from './Design/RiveScene';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

import theme from './Design/theme';

import classes from './Design/Rive.module.css';

const TechStack: React.FC = () => {
	const Container = styled(Box)({
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'column',
		margin: '2rem  10rem 0rem 0rem',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
		[theme.breakpoints.down('md')]: {
			padding: '5px 0px 0px 0px',
			width: '100%',
		},
	});

	const Title = styled(Typography)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		color: '#000027',
		fontSize: 'clamp(2rem, 1.5rem + 3vw, 5rem)',
		fontWeight: '800',
	});

	const HeaderText = styled(Typography)({
		color: '#000027',
		fontSize: 'clamp(2rem, 1rem + 1.5vw, 2.5rem)',
		fontWeight: '500',
		gap: '1',
		textAlign: 'center',
	});

	const Text = styled(Typography)({
		color: '#000027',
		fontSize: 'clamp(1rem, 0.5rem + 1.5vw, 1.5rem)',
		padding: '10px 250px 0px 250px',
		textAlign: 'center',
		[theme.breakpoints.down('md')]: {
			padding: '10px 0px 0px 0px',
			width: '100%',
		},
	});

	return (
		<>
			<Title>What I Do</Title>

			<Container flex={12}>
				<Box>
					<HeaderText variant='h4'>Development</HeaderText>

					<Text>
						I like to code things from scratch, and enjoy bringing ideas to life
						in the browser.
					</Text>
				</Box>

				<>
					<Box
						sx={{
							display: 'none',
							[theme.breakpoints.up('md')]: {
								minWidth: '25%',
								display: 'block',
							},
						}}
					>
						<RiveScene
							src='development.riv'
							stateMachine=''
							hoverState=''
							animation='Untitled 1'
							cssClass={classes.rive}
						/>
					</Box>
				</>
			</Container>

			<Container flex={12}>
				<>
					<Box
						sx={{
							display: 'none',
							maxWidth: '40%',
							padding: '60px',
							[theme.breakpoints.up('md')]: {
								minWidth: '25%',
								display: 'block',
							},
						}}
					>
						<RiveScene
							src='robot.riv'
							stateMachine='State Machine 1'
							hoverState='Click'
							animation='Robot Idle'
							cssClass={classes.rive}
						/>
					</Box>
				</>

				<Box>
					<HeaderText variant='h4'>Designer</HeaderText>

					<Text>
						I value simple content structure, clean design patterns, and
						thoughtful interactions.
					</Text>
				</Box>
			</Container>
		</>
	);
};

export default TechStack;
