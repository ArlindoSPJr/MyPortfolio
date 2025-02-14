import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, styled, Typography } from "@mui/material";
import healthsync from "../../../../assets/images/healthsync.png";
import spotifyLogo from "../../../../assets/images/spotifyLogo.jpg";
import soccerGameLogo from "../../../../assets/images/soccerGamerLogo.jpg";

const Projects = () => {
    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh", 
        display: "flex",
        flexDirection: "column", // Permite que o conteúdo fique em coluna
        alignItems: "center",
        paddingTop: "50px"
    }));

    

    return (
        <StyledProjects>
            <Container maxWidth="lg">
                <Grid container justifyContent="center" spacing={4} marginBottom={4}>
                    <Grid item xs={12} textAlign="center">
                        <Typography
                            color="white"
                            variant="h2"
                        >
                            Projects
                        </Typography>
                    </Grid>

                    {/** Aqui começam os Cards */}
                    <Grid container spacing={4} justifyContent="center" marginTop={3} >

                        {/** Card HealthSync */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={healthsync}
                                        alt="Imagem do Projeto"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            HealthSync
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        The HealthSync project is software developed to optimize operational efficiency and quality of care in health clinics.</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" LinkComponent={"a"} href="">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        
                        {/** Card Spotify */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={spotifyLogo}
                                        alt="Imagem do Projeto"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        SpotifyAPI-SpringOpenFeign
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        In this project we will consume a Spotify Rest API within Java using Spring Boot and its dependency Spriong Cloud Open Feign
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/ArlindoSPJr/SpotifyAPI-SpringOpenFeign" target="_blank">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        {/** Card SoccerGame */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={soccerGameLogo}
                                        alt="Imagem do Projeto"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        SoccerGame
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Soccer Game is software where you can create matches, add players and view their statistics, as well as organize championships</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/ArlindoSPJr/SoccerGame" target="_blank">
                                        Share (Em Andamento)
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;
