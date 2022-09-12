import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import Link from 'next/link';

interface ButtonStyle {
	color: string;
	disabled: boolean;
	link: string
}

const ButtonStyle: React.FC<ButtonStyle> = ({ color, disabled , link}) => {
	const StyledCard = styled(Button)({
		margin: '3px 10px 0px 40px',
		width: '90px',
		height: '35px',
		backgroundColor: '#ffffff',
		color: '#000027',
		fontWeight: '700',
		fontSize: '15px',
		padding: '2px',
		borderWidth: '3px',
		borderStyle: 'solid',
		borderColor: color,
		borderRadius: '8px',
		boxShadow: 'none',
		textAlign: 'center',
		ransition: '0.3s',
		transition: ' transform .2s',
		'&:hover': {
			transform: 'scale(1.3)',
			cursor: 'pointer',
			backgroundColor: '#ffffff',
			borderWidth: '2px',
			borderColor: color,
		},
	});


	return (
		<Link href={link} passHref>
			<StyledCard variant='outlined' disabled={disabled}>
				Visit
			</StyledCard>
		</Link>
	);
};

export default ButtonStyle;
