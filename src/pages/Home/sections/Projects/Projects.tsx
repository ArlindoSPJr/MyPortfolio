import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, styled, Typography } from "@mui/material";
import healthsync from "../../../../assets/images/healthsync.png";
import spotifyLogo from "../../../../assets/images/spotifyLogo.jpg";
import mp from "../../../../assets/images/mp.png";
import encurtador from "../../../../assets/images/encurtador.png"

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
        <StyledProjects id="projects">
            <Container maxWidth="lg">
                <Grid container justifyContent="center">
                    <Grid item xs={12} textAlign="center">
                        <Typography
                            color="white"
                            variant="h2"
                        >
                            Projects
                        </Typography>
                    </Grid>

                    {/* Cards centralizados */}
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                        alignItems="center"
                        marginTop={3}
                    >

                        {/** Card HealthSync */}
                        <Grid item xs={12} sm={6} md={4}
                        >
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    height: 400, // altura fixa
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                }}
                            >
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
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    height: 400, // altura fixa
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                }}
                            >
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

                        {/** Card Encurtador Url */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    height: 400, // altura fixa
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={encurtador}
                                        alt="Imagem do Projeto"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Url Shortener
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            My project is a URL shortening service that turns long addresses into short links, making them easier to share on social media, emails, and documents; in addition to saving visual space, it improves the user experience.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://encurtador-url-jr.netlify.app/" target="_blank">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        {/** Card SoccerGame */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    height: 400, // altura fixa
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={mp}
                                        alt="Imagem do Projeto"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            DistribuidoraMp
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Soccer Game is software where you can do orders, organize your clients,
                                            make notes and save reports. This project was made for the company Distribuidora Miranda Pereira.</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://distribuidora-web.onrender.com/index.html" target="_blank">
                                        Share
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
