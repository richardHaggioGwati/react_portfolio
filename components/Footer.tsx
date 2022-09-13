import Link from 'next/link';

import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material';

import rocket from '../public/Rocket.svg';

import gmail from '../public/gmail.svg';
import linkedin from '../public/linkedin.svg';
import github from '../public/mark-github.svg';

const Footer = () => {
	const FooterContainer = styled(Box)({
		marginTop: '1rem',
		display: 'flex',
		flexDirection: 'column',
	});

	const ImageContainer = styled(Box)({
		width: '100%',
		height: '14rem',
		marginBottom: '-2rem',
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

	const IconBox = styled(Box)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '20px 0px 0px 0px'
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
					loading='lazy'
				/>
			</ImageContainer>
			<FooterBox id='contact'>
				<FooterText>Prepair for blast of..</FooterText>
				<IconBox>
					<IconsContainer>
						<Link href='mailto:haggiog0844@gmail.com'>
							<Image
								src={gmail}
								alt='mail'
								layout='fixed'
								width={35}
								height={35}
							/>
						</Link>
					</IconsContainer>
					<IconsContainer>
						<Link href='/'>
							<a
								href='https://www.linkedin.com/in/richard-gwati-636a80233/'
								rel='noreferrer'
								target='_blank'
							>
								<Image
									src={linkedin}
									alt='Linkedin'
									layout='fixed'
									width={35}
									height={35}
								/>
							</a>
						</Link>
					</IconsContainer>
					<IconsContainer>
						<Link href='mailto:haggiog0844@gmail.com'>
							<a
								href='https://github.com/richardHaggioGwati'
								rel='noreferrer'
								target='_blank'
							>
								<Image
									src={github}
									alt='github'
									layout='fixed'
									width={28}
									height={28}
								/>
							</a>
						</Link>
					</IconsContainer>
				</IconBox>
			</FooterBox>
		</FooterContainer>
	);
};

export default Footer;
