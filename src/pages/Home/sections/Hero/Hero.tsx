import { Box, Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import myPhoto from "../../../../assets/images/myPhoto.png";
import DownloadIcon from '@mui/icons-material/Download';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: { // >= mobile
            paddingTop: "0",
        }

    }));

    const StyledImage = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1 px solid ${theme.palette.primary.contrastText}`,
    }));

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0} >
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center" >
                                <StyledImage src={myPhoto} alt="My Photo" />
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="white" variant="h1" textAlign="center" pb={2}>Arlindo Junior</Typography>
                        <Typography color="white" variant="h2" textAlign="center">I´m a Software Engineer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={() => window.open('../../../../../Curriculo.pdf', '_blank')} >
                                    <DownloadIcon />
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={() => window.open('https://www.linkedin.com/in/arlindo-j%C3%BAnior-904714230/', '_blank')}>
                                    <LinkedInIcon />
                                    <Typography>
                                        Linkedin
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>


    );
};

export default Hero;
