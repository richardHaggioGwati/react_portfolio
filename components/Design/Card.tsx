import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';

interface CardProps {
	children: ReactNode
	width?: string
	height?: string
	margin?: string
	color?: string
}

const Card: React.FC<CardProps> = ({ children, width, height, margin, color }) => {
	
	const StyledCard = styled(Box)({
		width: ` ${width ? width : '14rem'}`,
		height: ` ${height ? height : '25rem'}`,
		border: 'solid',
		borderWidth: '20px',
		borderColor: '#ffffff',
		margin: `${margin ? margin : '3rem'}`,
		backgroundImage: `${color}`,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: '-1',
	});

	return (
		<>
			<StyledCard>{children}</StyledCard>
		</>
	);
};

export default Card;
