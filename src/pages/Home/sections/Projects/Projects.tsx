import { Container, Grid, styled, Typography } from "@mui/material";

const Projects = () => {
    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Centraliza na vertical e horizontal
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            paddingTop: "0",
        }
    }));

    return (
        <StyledProjects>
            <Container maxWidth="lg">
                <Grid container justifyContent="center" marginTop={5} style={{ height: '100vh' }}>
                    <Grid item>
                        <Typography
                            color="white"  
                            variant="h2"
                            textAlign="center"
                        >
                            Projects
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;
