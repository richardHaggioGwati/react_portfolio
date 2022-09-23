import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import Image from 'next/image';

import planets from '../public/System.gif';

const Header: React.FC = () => {
	const Container = styled(Box)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '2rem',
	});

	const HeaderText = styled(Typography)({
		color: '#ffffff',
		fontSize: '2rem',
		fontWeight: '800',
		gap: 'normal',
		lineHeight: '36px',
		textAlign: 'center',
	});

	const IntroParagraph = styled(Typography)({
		color: '#ffffff',
		fontSize: '20px',
		lineHeight: '30px',
		marginTop: '1rem',
		textAlign: 'center',
	});

	return (
		<Container flex={12}>
			<Box>
				<HeaderText variant='h1'>
					Frontend Developer <br></br>& Designer
				</HeaderText>

				<IntroParagraph>
					I enjoy what I do and create elegantly and simple things with code.
				</IntroParagraph>
			</Box>

			<>
				<Box
					sx={{
						width: '375px',
					}}
				>
					<Image
						priority
						src={planets}
						alt='Planets'
						layout='responsive'
						width={8467}
						height={8520}
					/>
				</Box>
			</>
		</Container>
	);
};

export default Header;
