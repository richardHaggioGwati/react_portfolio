import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

import classes from './Rive.module.css';

/**
 * TODO:
 * ?initialValue to change input state
 * ! fix the gowth of the tree
 * Use set interval to increase the growth after a certain of period of time
 */

const RiveScene: React.FC = ({}) => {
	const STATE_MACHINE = 'State Machine 1';
	const HOVER_STATE_NAME = 'input';
	let VALUE = 100;

	const { rive, RiveComponent } = useRive({
		src: 'tree.riv',
		autoplay: true,
		stateMachines: STATE_MACHINE,
	});

	const inputHover = useStateMachineInput(
		rive,
		STATE_MACHINE,
		HOVER_STATE_NAME,
		VALUE,
	);
	
	return (
		<>
			<RiveComponent
				className={classes.tree}
			/>
		</>
	);
};

export default RiveScene;
