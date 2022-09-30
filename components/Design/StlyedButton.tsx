import Link from 'next/link';

import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import theme from './theme';

interface ButtonProp {
	text: string;
	target: string;
	margin: string;
	padding: string;
	disabled: boolean;
	display: boolean;
}

const StlyedButton: React.FC<ButtonProp> = ({
	text,
	target,
	margin,
	padding,
	disabled,
	display,
}) => {
	const StyledBox = styled(Box)({
		display: 'flex',
		justifyContent: 'space-around',
		[theme.breakpoints.down('md')]: {
			display: `${display ? 'none' : 'block'}`,
			padding: '0px 0px 0px 100px',
		},
	});

	const ButtonStyle = styled(Button)({
		color: 'white',
		textAlign: 'center',
		borderColor: '#32302F',
		backgroundColor: '#32302F',
		margin: margin,
		padding: padding,
		fontSize: '0.95rem',
		borderWidth: '2px',
		textTransform: 'none',
		borderRadius: '50px',
		'&:hover': {
			backgroundColor: '#CACACA',
			borderColor: '#32302F',
			color: '#000027',
			borderWidth: '2px',
		},
		'@:visited': {
			color: 'white',
		},
	});

	return (
		<StyledBox>
			<ButtonStyle variant='outlined' disabled={disabled}>
				<Link href={target} className='link'>
					{text}
				</Link>
			</ButtonStyle>
		</StyledBox>
	);
};

export default StlyedButton;
