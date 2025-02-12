import { Container, Grid, styled, Typography } from "@mui/material";

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "50px"
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            paddingTop: "0",
        }

    }));

    return (
        <StyledAbout>
            <Container maxWidth="lg">
                <Grid container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: '50vh' }}>

                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contentTest"
                            variant="h2"
                            textAlign="center"
                            sx={{
                                marginBottom: "20px",
                                paddingTop: "20px"
                            }}
                        >
                            About me</Typography>
                    </Grid>
                </Grid>
                <Grid container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    gap={10}
                    >
                        <Grid display="flex" justifyContent="center">
                            oi
                        </Grid>
                        <Grid>
                            oi
                        </Grid>
                    </Grid>
            </Container>
        </StyledAbout >
    )
}

export default About