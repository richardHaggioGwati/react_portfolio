import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

import theme from './theme';

import RiveScene from './RiveScene';
import StyledButton from './StlyedButton';

interface ItemProps {
	swap: boolean;
	title: string;
	text: string;
	disabled: boolean;
	target: string;
	fade: string;
	stateMachine: string;
	hoverState: string;
	animation: string;
	src: string;
	cssClass: string;
}

const Item: React.FC<ItemProps> = ({
	swap,
	title,
	text,
	disabled,
	target,
	fade,
	stateMachine,
	hoverState,
	animation,
	src,
	cssClass,
}) => {

	const Container = styled(Box)({
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		flexDirection: 'column',
		margin: '2rem  10rem 0rem 0rem',
		[theme.breakpoints.down('md')]: {
			margin: '10px 0px 0px 0px',
		},
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			justifyContent: 'center',
			margin: '10px 0px 0px 0px',
		},
	});

	const HeaderText = styled(Typography)({
		color: '#000027',
		textAlign: 'center',
		fontSize: 'clamp(1rem, 1.5rem + 1vw, 2rem)',
		fontWeight: '500',
		padding: '10px 20px 0px 20px',
	});

	const Text = styled(Typography)({
		color: '#000027',
		fontSize: 'clamp(1rem, 0.2rem + 1vw, 1.5rem)',
		padding: '10px 250px 0px 250px',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			padding: '10px 0px 0px 0px',
			width: '100%',
		},
	});

	return (
		<>
			{swap ? (
				<>
					<Container flex={12} data-aos={fade}>
						<>
							<Box
								sx={{
									display: 'none',
									[theme.breakpoints.up('sm')]: {
										minWidth: '25%',
										display: 'block',
									},
								}}
							>
								<RiveScene
									src={src}
									stateMachine={stateMachine}
									hoverState={hoverState}
									animation={animation}
									cssClass={cssClass}
								/>
							</Box>
						</>

						<Box>
							<HeaderText variant='h4'>{title}</HeaderText>

							<Text>{text}</Text>
							<StyledButton
								text='Visit'
								target={target}
								margin='1.5rem'
								padding='6px 60px 6px 60px'
								disabled={disabled}
								display={false}
							/>
						</Box>
					</Container>
				</>
			) : (
				<>
					<Container flex={12} data-aos={fade}>
						<Box>
							<HeaderText variant='h4'>{title}</HeaderText>

							<Text>{text}</Text>
							<StyledButton
								text='Visit'
								target={target}
								margin='1.5rem'
								padding='6px 60px 6px 60px'
								disabled={disabled}
								display={false}
							/>
						</Box>

						<>
							<Box
								sx={{
									display: 'none',
									[theme.breakpoints.up('sm')]: {
										minWidth: '25%',
										display: 'block',
									},
								}}
							>
								<RiveScene
									src={src}
									stateMachine={stateMachine}
									hoverState={hoverState}
									animation={animation}
									cssClass={cssClass}
								/>
							</Box>
						</>
					</Container>
				</>
			)}
		</>
	);
};

export default Item;
