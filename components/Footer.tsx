import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material';

import rocket from '../public/Rocket.svg';
import linkdin from '../public/linkedin.svg';
import gmail from '../public/gmail.svg';
import slack from '../public/slack.svg';

const Footer = () => {
	const FooterContainer = styled(Box)({
		marginTop: '1rem',
		display: 'flex',
		flexDirection: 'column',
	});

	const ImageContainer = styled(Box)({
		width: '100%',
		height: '14rem',
		marginBottom: '-1rem',
		zIndex: '-1',
	});

	const FooterBox = styled(Box)({
		backgroundColor: '#ffffff',
		width: '100%',
		height: '9rem',
		textAlign: 'center',
	});

	const FooterText = styled(Typography)({
		color: '#000',
		fontWeight: '500',
		fontSize: '1.5rem',
		margin: '1.6rem 0rem 0rem 0rem',
	});

	const IconsContainer = styled(Box)({
		width: '45px',
		height: '45px',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	});

	return (
		<FooterContainer flex={12}>
			<ImageContainer>
				<Image
					src={rocket}
					alt='rocket'
					layout='responsive'
					width={248}
					height={156.67}
				/>
			</ImageContainer>
			<FooterBox>
				<FooterText>Prepair for blast of..</FooterText>
				<IconsContainer>


				</IconsContainer>
			</FooterBox>
		</FooterContainer>
	);
};

export default Footer;
