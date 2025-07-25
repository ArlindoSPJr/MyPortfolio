import { Box, Container, Divider, Grid, styled, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "180px"
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            paddingTop: "30",
        }

    }));

    return (
        <StyledAbout id="about">
            <Container maxWidth="lg">
                <Grid container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: '20vh' }}>

                    <Grid item xs={12} md={7}>
                        <Typography
                            color="primary.contentTest"
                            variant="h2"
                            textAlign="center"
                            sx={{
                                marginBottom: "20px",
                                paddingTop: {
                                    xs: "190px",  // Somente para telefones
                                    md: "0px"    // Para dispositivos maiores que 'md'
                                }
                            }}
                        >
                            About me
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    gap={3}
                    display="flex"
                    flexDirection="column"
                    marginBottom={40}
                >
                    <Box display="flex" justifyContent="center" border="1px solid #aaaaaa "
                        padding={2} width={200} height={90} alignItems="center"
                        flexDirection="column" >
                        <SchoolIcon />
                        <Typography color="black" variant="h5" textAlign="center">
                            Education
                        </Typography>
                        <Typography color="black" variant="h6" textAlign="center">
                            Software Engineer
                        </Typography>
                    </Box>

                    <Typography color="black" fontSize="20px" sx={{ textAlign: "justify" }} >

                        I'm Arlindo, a Software Engineering student at PUC Minas, passionate about technology
                        and developing creative solutions. I have experience and knowledge in
                        Java, JavaScript, HTML, CSS, Spring Framework, and databases, with a strong focus on creating efficient and functional applications.
                    </Typography>
                    <Divider sx={{ width: '100%', margin: '10px auto', color: "black", background: "black" }} />
                    <Grid item xs={12} md={12} textAlign="center">
                        <Typography
                            color="primary.contentTest"
                            variant="h2"
                            textAlign="center"
                            sx={{
                                paddingTop: {
                                    xs: "130px",  // Somente para telefones
                                    md: "0px"    // Para dispositivos maiores que 'md'
                                }
                            }}
                        >
                            Skills
                        </Typography>
                        <Grid container justifyContent="center" gap={2} sx={{ flexWrap: 'nowrap', overflowX: 'auto' }} marginTop="20px">
                            <Box border="1px solid #aaaaaa" padding={2} width={120} height={50} display="flex" alignItems="center" justifyContent="center" fontSize="20px">
                                Java
                            </Box>
                            <Box border="1px solid #aaaaaa" padding={2} width={120} height={50} display="flex" alignItems="center" justifyContent="center" fontSize="20px">
                                Spring
                            </Box>
                            <Box border="1px solid #aaaaaa" padding={2} width={120} height={50} display="flex" alignItems="center" justifyContent="center" fontSize="20px">
                                MySQL
                            </Box>
                            <Box border="1px solid #aaaaaa" padding={2} width={120} height={50} display="flex" alignItems="center" justifyContent="center" fontSize="20px">
                                HTML
                            </Box>
                            <Box border="1px solid #aaaaaa" padding={2} width={120} height={50} display="flex" alignItems="center" justifyContent="center" fontSize="20px">
                                CSS
                            </Box>
                            <Box border="1px solid #aaaaaa" padding={2} width={120} height={50} display="flex" alignItems="center" justifyContent="center" fontSize="20px">
                                React
                            </Box>
                            <Box border="1px solid #aaaaaa" padding={2} width={120} height={50} display="flex" alignItems="center" justifyContent="center" fontSize="20px">
                                Node.js
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout >
    )
}

export default About