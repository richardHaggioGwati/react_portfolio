import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import Image from 'next/image';

import theme from './theme';

import holder from '../../public/Holder.svg';
import StyledButton from './StlyedButton';

interface ItemProps {
	swap: boolean;
	title: string;
	text: string;
	disabled: boolean;
	atlText: string;
	target: string;
	animation: string;
}

const Item: React.FC<ItemProps> = ({
	swap,
	title,
	text,
	disabled,
	atlText,
	target,
	animation,
}) => {
	const Container = styled(Box)({
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'column',
		margin: '2rem  10rem 0rem 0rem',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			justifyContent: 'center',
			margin: '0px 0px 80px 0px',
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
		[theme.breakpoints.down('md')]: {
			padding: '10px 10px 0px 10px',
			margin: '0px 100px 0px 100px',
			width: '100%',
		},
	});

	return (
		<>
			{swap ? (
				<>
					<Container flex={12} data-aos={animation}>
						<>
							<Box
								sx={{
									display: 'none',
									[theme.breakpoints.up('md')]: {
										minWidth: '25%',
										display: 'block',
									},
								}}
							>
								<Image
									priority
									src={holder}
									alt={atlText}
									layout='responsive'
									width={8467}
									height={8520}
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
					<Container flex={12} data-aos={animation}>
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
									[theme.breakpoints.up('md')]: {
										minWidth: '25%',
										display: 'block',
									},
								}}
							>
								<Image
									priority
									src={holder}
									alt={atlText}
									layout='responsive'
									width={8467}
									height={8520}
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

/* 


<Container flex={12} data-aos={animation}>
				<Box>
					<HeaderText variant='h4'>{title}</HeaderText>

					<Text>{text}</Text>
					<StyledButton
						text='Visit'
						target={target}
						margin='1.5rem'
						padding='6px 60px 6px 60px'
						disabled={disabled}
					/>
				</Box>

				<>
					<Box
						sx={{
							maxWidth: '40%',
							padding: '60px',
							[theme.breakpoints.up('md')]: {
								minWidth: '25%',
							},
						}}
					>
						<Image
							priority
							src={holder}
							alt={atlText}
							layout='responsive'
							width={8467}
							height={8520}
						/>
					</Box>
				</>
			</Container>

*/
