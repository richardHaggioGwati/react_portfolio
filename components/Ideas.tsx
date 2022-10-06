import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

import theme from './Design/theme';

import classes from './Design/Rive.module.css';
import RiveScene from './Design/RiveScene';

const Ideas: React.FC = () => {
    const Container = styled(Box)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		margin: '10px',
		maxWidth: '90%',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	});

	const HeaderText = styled(Typography)({
		color: '#000027',
		fontSize: 'clamp(2rem, 1rem + 4vw, 5rem)',
		fontWeight: '800',
		gap: '1',
        textAlign: 'center',
		padding: '100px',
		[theme.breakpoints.down('md')]: {
			padding: '50px 10px 50px 10px',
		},
	});

	const RiveTreeContainer = styled(Box)({
		minWidth: '40%',
		padding: '60px',
		overflow: 'hidden',
		[theme.breakpoints.up('md')]: {
			minWidth: '50%',
		},
		[theme.breakpoints.down('md')]: {
			padding: '0px 0px 0px 0px',
			margin: '0px 0px 0px 0px',
			width: '70%',
		},
	})

	return (
		<Paper elevation={16}>
			<Container>
				<RiveTreeContainer>
				<RiveScene
					src='simple_tree.riv'
					stateMachine=''
					hoverState=''
					animation='idle'
					cssClass={classes.idea}
				/>
				</RiveTreeContainer>

				<Box>
					<HeaderText variant='h3'>Bring your <br/>ideas to <br/>life...</HeaderText>
				</Box>
			</Container>
		</Paper>
	);
};

export default Ideas;
