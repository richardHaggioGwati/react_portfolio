import RiveScene from './Design/RiveScene';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

import theme from './Design/theme';

import classes from './Design/Rive.module.css';

const TechStack: React.FC = () => {
	const Container = styled(Box)({
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		flexDirection: 'column',
		margin: '0rem  1rem 0rem 0rem',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
		[theme.breakpoints.down('md')]: {
			padding: '0px 0px 0px 0px',
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
		[theme.breakpoints.down('md')]: {
			padding: '0px 50px 0px 50px',
			margin: '30px 0px 0px 0px',
		},
	});

	const Text = styled(Typography)({
		color: '#000027',
		fontSize: 'clamp(1rem, 0.5rem + 1.5vw, 1.5rem)',
		padding: '10px 250px 0px 250px',
		textAlign: 'center',
		[theme.breakpoints.down('md')]: {
			padding: '0px 50px 0px 50px',
			margin: '10px 0px 0px 0px',
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
							minWidth: '20%',
							margin: '0px 0px 0px -100px',
							display: 'block',
							[theme.breakpoints.down('sm')]: {
								maxWidth: '100%',
								margin: '-50px 0px 0px px',
								padding: '5px',
								display: 'flex',
							},
						}}
					>
						<RiveScene
							src='development.riv'
							stateMachine=''
							hoverState=''
							animation='Untitled 1'
							cssClass={classes.robots}
						/>
					</Box>
				</>
			</Container>

			<Container flex={12}>
				<>
					<Box
						sx={{
							display: 'none',
							[theme.breakpoints.up('sm')]: {
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
							cssClass={classes.robots}
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

				<Box
					sx={{
						display: 'none',
						[theme.breakpoints.down('sm')]: {
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
						cssClass={classes.mobileRobot}
					/>
				</Box>
			</Container>
		</>
	);
};

export default TechStack;
