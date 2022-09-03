import Hamburger from './Design/Hamburger';
import StyledButtons from './Design/StyledButtons';

import { styled } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import theme from './Design/theme';


const Nav: React.FC = () => {
	const StyledToolbar = styled(Toolbar)({
		justifyContent: 'space-between',
		display: 'flex',
	});

	return (
		<>
			<AppBar
				position='static'
				sx={{
					marginBottom: '0.5rem',
					backgroundColor: 'rgba(0,0,0,0.56)',
					boxShadow: 'none',
				}}
			>
				<StyledToolbar>
					<Stack direction='row' spacing={0.2}>
						<Typography
							variant='h5'
							component='h2'
							sx={{
								color: '#fff',
								fontWeight: 'bold',
								marginLeft: '3rem',
							}}
						>
							Richard
						</Typography>
						<Typography
							variant='h5'
							component='h2'
							sx={{
								color: '#ff491d',
								fontWeight: '900',
							}}
						>
							.
						</Typography>
					</Stack>
					<Box
						sx={{
							display: 'none',
							[theme.breakpoints.down('md')]: {
								display: 'flex',
							},
						}}
					>
						<Hamburger/>
					</Box>
					<StyledButtons />
				</StyledToolbar>
				<Divider variant='inset' />
			</AppBar>
		</>
	);
};

export default Nav;