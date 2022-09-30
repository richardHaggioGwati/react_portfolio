import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import Image from 'next/image';

import theme from './Design/theme';

import holder from '../public/Holder.svg';

const Ideas: React.FC = () => {
    const Container = styled(Box)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		margin: '50px',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	});

	const HeaderText = styled(Typography)({
		color: '#000027',
		fontSize: 'clamp(2rem, 1rem + 4vw, 5rem)',
		fontWeight: '800',
		gap: '1',
        textAlign: 'center',
		padding: '100px',
		[theme.breakpoints.down('md')]: {
			padding: '50px 10px 50px 10px',
		},
	});

	return (
		<Paper elevation={16}>
			<Container flex={12}>
				<Box
					sx={{
						minWidth: '40%',
						padding: '60px',
						[theme.breakpoints.up('md')]: {
							minWidth: '50%',
						},
						[theme.breakpoints.down('md')]: {
							padding: '10px 10px 0px 10px',
							margin: '50px 100px 0px 100px',
							width: '100%',
						},
					}}
				>
					<Image
						priority
						src={holder}
						alt='Planets'
						layout='responsive'
						width={8467}
						height={8520}
					/>
				</Box>

				<Box>
					<HeaderText variant='h3'>Bring your <br/>ideas to <br/>life...</HeaderText>
				</Box>
			</Container>
		</Paper>
	);
};

export default Ideas;
