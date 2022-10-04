import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

import classes from './Rive.module.css';

/**
 * TODO:
 * ?resolve hover state
 * @returns RiveScene
 * avatar.riv
 * idlePreview
 */

interface Rive {
	stateMachine: string;
	hoverState: string;
	animation: string;
	src: string;
	cssClass: string;
}

const RiveScene: React.FC<Rive> = ({
	stateMachine,
	hoverState,
	animation,
	src,
	cssClass,
}) => {
	const STATE_MACHINE = stateMachine;
	const HOVER_STATE_NAME = hoverState;

	const { rive, RiveComponent } = useRive({
		src: src,
		autoplay: true,
		stateMachines: STATE_MACHINE,
		animations: animation,
	});

	const inputHover = useStateMachineInput(
		rive,
		STATE_MACHINE,
		HOVER_STATE_NAME,
	);

	return (
		<>
			<RiveComponent
				className={cssClass}
				onLoad={() => inputHover && inputHover.fire()}
			/>
		</>
	);
};

export default RiveScene;
