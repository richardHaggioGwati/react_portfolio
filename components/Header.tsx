import RiveScene from './Design/RiveScene';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import TreeStateMachine from './Design/TreeStateMachine'

import theme from './Design/theme';

const Header: React.FC = () => {
	const Container = styled(Box)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '2rem',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			marginTop: '0rem',
		},
	});

	const HeaderText = styled(Typography)({
		color: '#000027',
		fontSize: 'clamp(2.8rem, 1rem + 4vw, 5rem)',
		fontWeight: '800',
		textAlign: 'center',
		[theme.breakpoints.down('md')]: {
			padding: '0px',
		},
	});

	const IntroParagraph = styled(Typography)({
		color: '#000027',
		fontSize: 'clamp(1.2rem, 0.5rem + 1vw, 2.5rem)',
		padding: '50px',
		margin: '0px',
		textAlign: 'center',
		[theme.breakpoints.down('md')]: {
			padding: '10px',
			margin: '10px',
		},
	});

	const RiveTreeContainer = styled(Box)({
		minWidth: '60%',
		padding: '10px',
		margin: '10px ',
		[theme.breakpoints.down('md')]: {
			minWidth: '50%',
			padding: '0px 30px 0px 30px',
			margin: '-200px ',
		},
	})

	return (
		<Container flex={12}>
			<Box>
				<HeaderText variant='h1'>
					Frontend <br />
					Developer <br />& Designer
				</HeaderText>

				<IntroParagraph>
					I enjoy what I do and create elegantly and simple things with code.
				</IntroParagraph>
			</Box>

			<>
				<RiveTreeContainer>
					<TreeStateMachine />
				</RiveTreeContainer>
			</>
		</Container>
	);
};

export default Header;
