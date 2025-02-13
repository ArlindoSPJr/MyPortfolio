import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, styled, Typography } from "@mui/material";
import healthsync from "../../../../assets/images/healthsync.png";

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
                                        O projeto HealthSync é um software desenvolvido para otimizar a eficiência operacional e a qualidade de atendimento em clínicas de saúde.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" LinkComponent={"a"} href="">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://via.placeholder.com/300x140"
                                        alt="Imagem do Projeto"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Projeto 2
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Outro projeto interessante. Descobre mais detalhes!
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
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
