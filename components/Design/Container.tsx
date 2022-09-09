import { ReactNode } from 'react';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';

interface ContainerProps {
	children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	const StyledBox = styled(Box)({
		width: '202px',
		height: '188px',
		borderRadius: '12%',
        backgroundColor: '#000027',
        margin: '30px',
        boxShadow: '5px 10px #D9D9D9',
        borderWidth: '15px',
	});

	return <StyledBox>{children}</StyledBox>;
};

export default Container;
