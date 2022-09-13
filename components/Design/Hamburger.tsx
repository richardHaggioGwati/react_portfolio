import { useState } from 'react';

import Link from 'next/link';

import classes from './Hamburger.module.css';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Hamburger: React.FC = () => {
	const [isActive, setIsActive] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		setIsActive(!isActive);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setIsActive(!isActive);
	};

	return (
		<>
			<button
				name='icon-drawer'
				onClick={handleClick}
				className={`${classes.hamburger} ${isActive ? classes.active : ''}`}
			>
				<div className={classes.bar}></div>
			</button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>
					<Link href='#contact' className='link'>Contact</Link>
				</MenuItem>
			</Menu>
		</>
	);
};

export default Hamburger;
