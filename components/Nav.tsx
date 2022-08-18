import AppBar from "@mui/material/AppBar";

const Nav: React.FC = () => {
    
    return (
        <AppBar position='sticky' sx={{
            marginBottom: '0.5rem',
        }}>
            <p color="red">
                Nav
            </p>
        </AppBar>
        );
}

export default Nav;
