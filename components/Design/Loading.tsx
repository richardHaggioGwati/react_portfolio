import Box from '@mui/material/Box';
import { styled } from '@mui/material';

const Loading: React.FC = () => {
	const CenteredBox = styled(Box)({
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	});

	return (
		<>
			<CenteredBox>
				<svg
					version='1.1'
					id='loader'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					x='0px'
					y='0px'
					width='100px'
					height='100px'
					viewBox='0 0 120 120'
					xmlSpace='preserve'
				>
					<g>
						<defs>
							<path
								id='c_path'
								d='M87.417,78.237c-0.209-0.245-0.432-0.471-0.666-0.685c-0.47-0.428-0.984-0.787-1.528-1.075
			c-2.65-1.406-6.001-1.141-8.42,0.926h-0.002l-0.002-0.001c-3.945,3.373-9.066,5.413-14.666,5.413
			c-12.474,0-22.586-10.111-22.586-22.585s10.112-22.585,22.586-22.585c5.586,0,10.697,2.03,14.64,5.391l0.004-0.003
			c0.009,0.009,0.018,0.017,0.026,0.024c2.419,2.067,5.77,2.332,8.42,0.926c0.544-0.289,1.057-0.647,1.528-1.075
			c0.232-0.212,0.457-0.439,0.666-0.685c2.696-3.155,2.329-7.895-0.815-10.599c-0.007-0.004-0.015-0.011-0.02-0.016
			c-0.009-0.008-0.02-0.015-0.028-0.024c-6.575-5.609-15.101-8.997-24.421-8.997c-20.789,0-37.643,16.854-37.643,37.643
			c0,20.788,16.854,37.642,37.643,37.642c9.318,0,17.846-3.386,24.419-8.993c0.011-0.011,0.021-0.019,0.032-0.029
			c0.005-0.005,0.011-0.01,0.018-0.016C89.746,86.131,90.112,81.393,87.417,78.237z'
							/>
						</defs>
						<clipPath id='c_shape'>
							<use xlinkHref='#c_path' overflow='visible' />
						</clipPath>
						<g clipPath='url(#c_shape)'>
							<rect fill='#3E2D54' width='40.289' height='120' />
							<rect x='39.289' fill='#40587B' width='16.057' height='120' />
							<rect x='54.346' fill='#4D90A3' width='16.057' height='120' />
							<rect x='69.403' fill='#7CB694' width='16.057' height='120' />
							<rect x='84.46' fill='#DCD280' width='35.54' height='120' />
						</g>
					</g>
				</svg>
			</CenteredBox>
		</>
	);
};

export default Loading;
