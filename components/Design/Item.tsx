import Image, { StaticImageData } from 'next/image';

import Box from '@mui/material/Box';
import { styled } from '@mui/material';

import ButtonStyle from './ButtonStyle';

interface ItemProps {
	image: StaticImageData;
	color: string;
	disabled: boolean;
	atlText: string;
	target: string
}

const Item: React.FC<ItemProps> = ({ image, color, disabled, atlText, target }) => {
	const StyledBox = styled(Box)({
		width: '202px',
		height: '188px',
		borderRadius: '12%',
		backgroundColor: '#000027',
		margin: '30px',
		boxShadow: '7px 10px rgba(0, 0, 0, 0.3)',
		borderWidth: '15px',
		alignItems: 'center',
	});

	return (
		<>
			<StyledBox>
				<Box
					sx={{
						width: '172px',
						height: '158px',
						margin: '15px',
					}}
				>
					<Image
						src={image}
						style={{
							width: '90%',
							display: 'flex',
							borderRadius: '10%',
						}}
						alt={atlText}
						layout='responsive'
						width={3200}
						height={2400}
						loading='lazy'
					/>
					<ButtonStyle link={target} color={color} disabled={disabled} />
				</Box>
			</StyledBox>
		</>
	);
};

export default Item;
