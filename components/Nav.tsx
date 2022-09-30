import Image from 'next/image';

import Hamburger from './Design/Hamburger';
import StlyedButton from './Design/StlyedButton';

import { styled } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import theme from './Design/theme';

import name from '../public/Name.svg'

const Nav: React.FC = () => {
	const StyledToolbar = styled(Toolbar)({
		justifyContent: 'space-between',
		display: 'flex',
	});

	const NameContainer = styled(Box)({
		width: '100px',
		padding: '0px 20px 0px 20px'
	})

	return (
		<>
			<AppBar
				position='static'
				sx={{
					backgroundColor: '#FFFFFF',
					boxShadow: 'none',
					margin: '0px 0px 0px 0px',
				}}
			>
				<StyledToolbar>
					<NameContainer>
					<Image
						priority
						src={name}
						alt='Logo'
						layout='responsive'
						width={200}
						height={200}
					/>
					</NameContainer>
					<Box
						sx={{
							display: 'none',
							[theme.breakpoints.down('md')]: {
								display: 'flex',
							},
						}}
					>
						<Hamburger />
					</Box>
					<StlyedButton
						text='Contact'
						target='#contact'
						margin='0.5rem'
						padding='6px 30px 6px 30px'
						disabled={false}
						display={true}
					/>
				</StyledToolbar>
			</AppBar>
		</>
	);
};

export default Nav;
