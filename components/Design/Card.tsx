import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';

import theme from './theme'

interface CardProps {
	children: ReactNode
	width?: string
	height?: string
	margin?: string
	color?: string
}

const Card: React.FC<CardProps> = ({ children, width, height, margin, color }) => {
	
	const StyledCard = styled(Box)({
		maxWidth: width,
		minHeight: height,
		border: 'solid',
		borderWidth: '20px',
		borderColor: '#ffffff',
		margin: margin,
		backgroundImage: `${color}`,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	});

	return (
		<>
			<StyledCard>{children}</StyledCard>
		</>
	);
};

export default Card;
