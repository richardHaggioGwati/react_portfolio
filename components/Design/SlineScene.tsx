import Spline from "@splinetool/react-spline";
import { styled } from '@mui/material/styles';
import theme from "./theme";

const SplineScene: React.FC = () => {
    
    const StyledScene = styled(Spline)({
        position: "absolute",
        margin: 0,
        top: 0,
        right: 0,
        width: "1200px",
        height: "1000px",
        [theme.breakpoints.down("sm")]: {
            transform: "scale(0.5)",
            right: "auto",
            left: "50%",
            marginLeft: "-600px",
        }
    })

    return (
        <StyledScene scene="https://prod.spline.design/k99HVzraHEeIFQii/scene.splinecode"/>
    )
}

export default SplineScene;