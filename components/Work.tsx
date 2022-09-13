import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import Card from './Design/Card';
import Item from './Design/Item';

import spotify from '../public/work/Spotify.png';
import chat from '../public/work/Chat.png';
import earth from '../public/work/Earth.png';
import weather from '../public/work/Weather.png';

const Data = [
	{
		image: spotify,
		color: '#00A547',
		disabled: true,
		altText: 'spotify',
		link: '',
	},
	{
		image: chat,
		color: '#0077B6',
		disabled: false,
		altText: 'chat app',
		link: 'https://chat-app-dashboard.vercel.app/',
	},
	{
		image: earth,
		color: '#00A547',
		disabled: true,
		altText: 'planets app',
		link: '',
	},
	{
		image: weather,
		color: '#00A547',
		disabled: true,
		altText: 'weather app',
		link: '',
	},
];

const Work = () => {
	const Header = styled(Typography)({
		color: '#ffffff',
		marginTop: '30px',
		textAlign: 'center',
		fontSize: '1.58rem',
		fontWeight: '500',
		margin: '1.6rem 1.5rem 0rem 1.5rem',
	});

	return (
		<Card
			width='18rem'
			height='68rem'
			margin='35px 10px 50px 30px'
			color='radial-gradient(circle farthest-side, #890048, #540048)'
		>
			<Header>Project&apos;s I have done</Header>
			<>
				{Data.map((item) => (
					<Item
						key={item.altText}
						image={item.image}
						color={item.color}
						target={item.link}
						disabled={item.disabled}
						atlText={item.altText}
					/>
				))}
			</>
		</Card>
	);
};

export default Work;
