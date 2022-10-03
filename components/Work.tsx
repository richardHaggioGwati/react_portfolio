import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

import Item from './Design/Item';
import Data from './Design/ItemData';
import theme from './Design/theme';

const Work = () => {
	const Header = styled(Typography)({
		color: '#000027',
		marginTop: '30px',
		textAlign: 'center',
		fontSize: 'clamp(2rem, 1.5rem + 3vw, 5rem)',
		fontWeight: '800',
		margin: '20px 0px 50px 0px',
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
						target={item.link}
						fade={item.fade}
						stateMachine={item.stateMachine}
						hoverState={item.hoverState}
						animation={item.animation}
						src={item.src}
						cssClass={item.cssClass}
					/>
				))}
			</>
		</>
	);
};

export default Work;
