import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {
    
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
    }))


    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem onClick={() => window.location.href = '#about'}>About</MenuItem>
                    <MenuItem onClick={() => window.location.href = '#projects'}>Projects</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar
