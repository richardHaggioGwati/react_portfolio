import Image from 'next/image';

import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import Card from './Design/Card';
import Container from './Design/Container';
import spotify from '../public/work/Image.png';

const Work = () => {
	const Header = styled(Typography)({
		color: '#ffffff',
		marginTop: '30px',
		textAlign: 'center',
		fontSize: '1.4rem',
		fontWeight: '500',
		margin: '1.6rem 1.5rem 0rem 1.5rem',
	});

    const ImageContainer = styled(Box)({
        width: '182px',
		height: '168px',  
    })

	return (
		<Card
			width='17rem'
			height='55rem'
			margin='0px 10px 0px 30px'
			color='radial-gradient(circle farthest-side, #890048, #540048, #000027)'
		>
			<Header>Project&apos;s I have done</Header>
			<Container>
            <Image
						src={spotify}
						alt='spotify'
						layout='responsive'
						width={97}
						height={103}
						loading='lazy'
					/>
			</Container>

		</Card>
	);
};

export default Work;
