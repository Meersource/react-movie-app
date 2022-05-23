import React from "react";
import { img_300, unavailable } from "../../config/config";
import {
  Typography,
  Card,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
} from "@material-ui/core";
// import useStyles from "./styles";
import "./SingleContent.css";
import Badge from "@material-ui/core/Badge";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  //   const classes = useStyles();

  return (
    //   <Container maxWidth='xl'>

      <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>

      {/* <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item key={id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={poster ? `${img_300}/${poster}` : unavailable}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                  {title}
                </Typography>

                <Typography>
                  <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container> */}
 </ContentModal>
    // </Container>
  );
};

export default SingleContent;
