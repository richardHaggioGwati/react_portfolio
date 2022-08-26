import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import Box from '@mui/material/Box';
import theme from './theme';

const StyledButtons: React.FC = () => {
	const StyledBox = styled(Box)({
		display: 'flex',
		justifyContent: 'space-around',
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	});

	const ButtonStyle = styled(Button)({
		color: '#fe481c',
		justifyContent: 'center',
		borderColor: '#fe481c',
		backgroundColor: '#fff',
		margin: '0.5rem',
		fontSize: '0.95rem',
		borderWidth: '2px',
		textTransform: 'none',
		borderRadius: '50px',
		marginRight: '2rem',
		'&:hover': {
			backgroundColor: '#fe481c',
			borderColor: '#fe481c',
			color: '#fff',
		},
	});

	const ContactButton = styled(ButtonUnstyled)`
	font-weight: bold;
	font-size: 0.875rem;
	padding: 12px 24px;
	border-radius: 8px;
	color: #000;
	transition: all 150ms ease;
	background-color: #fff;
	cursor: pointer;
	border: none;
  
	&:hover {
	  background-color: #fff;
	  color: #fe481c;
	}
`

	return (
		<StyledBox>
			<ContactButton>Conatct</ContactButton>
			<ButtonStyle variant='outlined'>Say hi!</ButtonStyle>;
		</StyledBox>
	);
};

export default StyledButtons;
