import { useState } from 'react';

import classes from './Hamburger.module.css';

const Hamburger: React.FC = () => {
	const [isActive, setIsActive] = useState(false);
	
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsActive(!isActive);
	};

	return (
		<>
			<button
				onClick={handleClick}
				className={`${classes.hamburger} ${isActive ? classes.active : ''}`}
			>
				<div className={classes.bar}></div>
			</button>
		</>
	);
};

export default Hamburger;
