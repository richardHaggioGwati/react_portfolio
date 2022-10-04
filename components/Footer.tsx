import Link from 'next/link';

import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material';

import theme from './Design/theme';

import linkdin from '../public/linkdin.svg';
import google from '../public/google.svg';
import github from '../public/github.svg';

const Footer = () => {
	const FooterContainer = styled(Box)({
		margin: '150px 0px 0px 0px',
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#f6f6f6',
		minWidth: '100%',
		height: '100px',
		justifyContent: 'space-evenly',
	});

	const Header = styled(Typography)({
		color: '#000027',
		fontWeight: '500',
		width: '100%',
		fontSize: '1.3rem',
		margin: '30px 0px 0px 0px',
		padding: '10px 0px 10px 10px',
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	});

	const StyledBox = styled(Box)({
		display: 'flex',
		flexDirection: 'row',
		width: '30%',
		padding: '35px 0px 0px 18px',
		margin: '',
	});

	const Text = styled(Typography)({
		color: '#000027',
		fontSize: 'clamp(0.1rem)',
		margin: '0px 0rem 0rem 0rem',
		padding: '10px 10px 0px 10px',
	});

	const IconContainer = styled(Box)({
		justifyContent: 'center',
		alignItems: 'center',
		margin: '10px 0px 0px 0px',
		minWidth: '20px',
	});

	return (
		<FooterContainer flex={12} id='contact'>
			<Header>Contact me...</Header>
			<StyledBox>
				<IconContainer>
					<Image
						src={google}
						alt='gmail'
						layout='responsive'
						width={488}
						height={512}
					/>
				</IconContainer>
				<Text>
					<Link href='mailto:haggiog0844@gmail.com'>
						Gmail
					</Link>
				</Text>
			</StyledBox>

			<StyledBox>
				<IconContainer>
					<Image
						src={github}
						alt='github'
						layout='responsive'
						width={488}
						height={512}
					/>
				</IconContainer>
				<Text>
					<Link href='https://github.com/richardHaggioGwati'>
						Github
					</Link>
				</Text>
			</StyledBox>

			<StyledBox>
				<IconContainer>
					<Image
						src={linkdin}
						alt='linkdin'
						layout='responsive'
						width={488}
						height={512}
					/>
				</IconContainer>
				<Text>
					<Link href='https://www.linkedin.com/in/richard-gwati-636a80233/'>
						Linkdin
					</Link>
				</Text>
			</StyledBox>
		</FooterContainer>
	);
};

export default Footer;
