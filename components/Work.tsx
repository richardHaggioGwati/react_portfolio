import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import Item from './Design/Item';
import theme from './Design/theme';

const Data = [
	{
		swap: false,
		title: 'Spotify',
		text: 'This is a copy of the home page for the well-known Spotify online app, which is my favorite music streaming service.',
		disabled: true,
		altText: 'spotify',
		link: '',
		animation: 'fade-up',
	},
	{
		swap: true,
		title: 'Chat',
		text: 'A conversation app with a stylish appearance and modern design. Made with Material UI.',
		disabled: false,
		altText: 'chat app',
		link: 'https://chat-app-dashboard.vercel.app/',
		animation: 'fade-left',
	},
	{
		swap: false,
		title: 'Earth',
		text: 'I adore the stars and everything space-related. This website provides details about each planet in our solar system.',
		disabled: true,
		altText: 'palnet website',
		link: '',
		animation: 'fade-right',
	},
	{
		swap: true,
		title: 'Weather',
		text: 'Everybody requires their own weather app. A web application that generates local weather reports every day and is easy to maintain.',
		disabled: true,
		altText: 'weather app',
		link: '',
		animation: 'fade-down',
	},
];

const Work = () => {
	const Header = styled(Typography)({
		color: '#000027',
		marginTop: '30px',
		textAlign: 'center',
		fontSize: 'clamp(2rem, 1.5rem + 3vw, 5rem)',
		fontWeight: '800',
		margin: '1.6rem 1.5rem 0rem 1.5rem',
		width: '100%',
		[theme.breakpoints.down('md')]: {
			margin: '10px 0px 0px 0px',
		},
	});

	return (
		<>
			<Header>My passion Projects</Header>
			<>
				{Data.map((item) => (
					<Item
						key={item.title}
						swap={item.swap}
						title={item.title}
						text={item.text}
						disabled={item.disabled}
						atlText={item.altText}
						target={item.link}
						animation={item.animation}
					/>
				))}
			</>
		</>
	);
};

export default Work;
